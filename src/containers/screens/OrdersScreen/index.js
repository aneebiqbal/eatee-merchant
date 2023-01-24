import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonIconOrText, Header, PaginatedList, SearchField, Spinner } from '../../../components/common';
import OrderItem from '../../../components/common/Orders/OrderItem';
import { Colors, Images } from '../../../theme';
import OrderDetailsModal from './OrderDetailsModal';
import { fetchOrderHistory, orderHistoryResetStates } from '../../../actions/OrderHistoryAction';
import { useSelector } from 'react-redux';
import Status from '../../../constants/status';
import { useDispatch } from 'react-redux';

export const OrderStatus = Object.freeze({
  InProgress: 1,
  Cancelled: 5,
  Completed: 4,
  All: 0
});


const OrdersScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const {
    user: {accessToken},
  } = useSelector(({AccountState}) => AccountState);

  const [searchText, setSearchText, getSearchText] = useState('');
  const [orderStatusTypeId, setOrderStatusTypeId] = useState(OrderStatus.All);

  useEffect(() => {
    dispatch(
      fetchOrderHistory(accessToken, {
        page: 0,
        limit: 0,
        totalCount: 0,
        orderStatusTypeId: orderStatusTypeId,
      }),
    );
    return () => dispatch(orderHistoryResetStates());
  }, [accessToken, dispatch, searchText, orderStatusTypeId]);


  const {ordersStatus, ordersMeta, orders} = useSelector(
    ({OrderHistoryState}) => OrderHistoryState,
  );

  const renderOrderItem = ({ item }) => {
    console.log(item)
    return (<OrderItem 
      order={item}
      navigation={navigation}
    />)
  }

  return (
    <SafeAreaView style={{
      backgroundColor: '#DDDDDD',
      flex: 1
    }}>
      <Header
        user
        left
        navigation={navigation}
      />
      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <SearchField style={{
          margin: 20,
          width: '30%',
          height: 48,
          borderRadius: 48
        }} onChange={()=>console.log('test')}/>
        <View style={{
          flexDirection: 'row'
        }}>
          {
            ['All', 'InProgress', 'Completed', 'Cancelled'].map((filterLabel)=> (
              <ButtonIconOrText label={filterLabel} 
              backgroundColor={OrderStatus[filterLabel] === orderStatusTypeId ? Colors.primary : Colors.lightGra}
              onPress={()=> {
                setOrderStatusTypeId(OrderStatus[filterLabel])
              }} 
              buttonVariant={'circle'} 
              style={{ marginVertical: 28, marginHorizontal: 4, width: '19%' }}
            />))
          }
        </View>
      </View>
      {ordersStatus === Status.LOADING && !orders.length ? (
          <Spinner />
        ) : (
          <PaginatedList
            data={orders}
            renderer={renderOrderItem}
            meta={ordersMeta}
            fetchMore={() => fetchMore(fetchOrderHistory, ordersMeta)}
            loading={ordersStatus === Status.LOADING}
          />
        )}
    </SafeAreaView>
  )
}

export default OrdersScreen