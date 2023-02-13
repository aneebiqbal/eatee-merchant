import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonIconOrText, FiltersHeader, Header, PaginatedList, SearchField, Spinner } from '../../../components/common';
import OrderItem from '../../../components/common/Orders/OrderItem';
import { Colors, Images } from '../../../theme';
import OrderDetailsModal from './OrderDetailsModal';
import { fetchOrderHistory, orderHistoryResetStates } from '../../../actions/OrderHistoryAction';
import { useSelector } from 'react-redux';
import Status from '../../../constants/status';
import { useDispatch } from 'react-redux';
import { styles } from './styles';

export const OrderStatus = Object.freeze({
  All: 0,
  Pending: 1,
  Preparing: 2,
  Accepted: 3,
  Completed: 4,
  Cancelled: 5,
});

const OrdersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    user: {accessToken},
  } = useSelector(({AccountState}) => AccountState);

  const [searchText, setSearchText, getSearchText] = useState('');
  const [currentTab, setCurrentTab] = useState(1)
  const [orderStatusTypeId, setOrderStatusTypeId] = useState(OrderStatus.All);

  const filterItems = [
    { title: 'Statistics', image: currentTab == 0 ? Images.statisticsOn : Images.statistics, onClick: () => setCurrentTab(0),},
    { title: 'All Orders', image: currentTab == 1 ? Images.allOrdersOn : Images.allOrders, onClick: () => setCurrentTab(1)},    
  ]

  useEffect(() => {
    dispatch(
      fetchOrderHistory(accessToken, {
        page: 0,
        limit: 0,
        totalCount: 0,
        searchText: searchText,
        orderStatusTypeId: orderStatusTypeId,
      }),
    );
    return () => dispatch(orderHistoryResetStates());
  }, [accessToken, dispatch, searchText, orderStatusTypeId]);

  const fetchMore = (action, meta) => {
    if (meta) {
      let payload = {
        page: meta.currentPage + 1,
        limit: 10,
        totalCount: meta.totalCount,
        searchText: orderStatusTypeId,
        orderStatusTypeId: orderStatusTypeId,
      };
      dispatch(action(accessToken, payload));
    }
  };

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
    <SafeAreaView style={styles.orderContainer}>
      <Header
        user
        left
        navigation={navigation}
      />
      <FiltersHeader
          items={filterItems}
      />
      <View>
          {currentTab === 0 && navigation.navigate('OrdersStatisticsScreen')}
          {/* {currentTab === 1 && } */}
      </View>

      <View horizontal={true} style={styles.StatusesBar}>
        {
          ['All', 'Pending', 'Preparing', 'Accepted', 'Completed', 'Cancelled'].map((filterLabel)=> (
            <ButtonIconOrText label={filterLabel} 
            backgroundColor={OrderStatus[filterLabel] === orderStatusTypeId ? Colors.primary : Colors.blackCoral}
            onPress={()=> {
              setOrderStatusTypeId(OrderStatus[filterLabel])
            }} 
            buttonVariant={'circle'} 
            style={styles.labelButtonStyle}
          />))
        } 
      </View>
      <View style={styles.fdrow}>
        <SearchField 
         style={styles.searchField}
         onChange={setSearchText}
         value={searchText}
        />
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