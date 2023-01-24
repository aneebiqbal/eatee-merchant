import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles} from './styles';
import { ButtonIconOrText, Header, OrderHistoryItem, OrderItem, PaginatedList, SearchField, Spinner } from '../../../components/common';
import { Colors, Images } from '../../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderHistory, orderHistoryResetStates } from '../../../actions/OrderHistoryAction';
import { OrderStatus } from '../OrdersScreen';
import Status from '../../../constants/status';

const HistoryScreen = ({navigation}) => {
  const [searchText, setSearchText, getSearchText] = useState('');
  const [orderStatusTypeId, setOrderStatusTypeId] = useState(OrderStatus.InProgress);

  const dispatch = useDispatch();

  const {
    user: {accessToken},
  } = useSelector(({AccountState}) => AccountState);

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

  const renderOrderHistoryItem = ({ item }) => {
    console.log(item)
    return (<OrderHistoryItem 
      order={item}
      navigation={navigation}
    />)
  }
  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', flex: 1}}>
        <Header
            user
            left
            navigation={navigation}
        />
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#1A1E22',
          justifyContent: 'center',
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
        <View 
        style={{
          flexDirection: 'row',
        }}
        >
        <SearchField 
          style={{
            margin: 15,
            width: '30%',
            height: 48,
            borderRadius: 48
          }} 
          onChange={()=>console.log('test')}
          placeholder='Bill ID'
        />
        <SearchField 
          style={{
            margin: 15,
            width: '30%',
            height: 48,
            borderRadius: 48
          }} 
          onChange={()=>console.log('test')}
          placeholder='Date'
        />
      </View>
      {ordersStatus === Status.LOADING && !orders.length ? (
          <Spinner />
        ) : (
          <PaginatedList
            data={orders}
            renderer={renderOrderHistoryItem}
            meta={ordersMeta}
            fetchMore={() => fetchMore(fetchOrderHistory, ordersMeta)}
            loading={ordersStatus === Status.LOADING}
          />
        )}
</SafeAreaView>
  )
}

export default HistoryScreen