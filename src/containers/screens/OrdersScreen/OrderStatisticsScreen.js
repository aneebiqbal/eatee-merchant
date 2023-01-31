import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

import {ButtonIconOrText, FiltersHeader, Header, OrderItem, OrdersStatisticsCard, SearchField, ShadowCard} from '../../../components/common';
import { styles } from './styles';
import { Images } from '../../../theme';
import OrderDetailsModal from './OrderDetailsModal';


  const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };
  
  const defaultProps = {};
const OrderStatisticsScreen = ({navigation}) => {
  const closeModal = () => setShowItemDetails(false)
  const openModal = () => setShowItemDetails(true)

  const [currentTab, setCurrentTab] = useState(0)
  const [showItemDetails, setShowItemDetails] = useState(false)

  const filterItems = [
    { title: 'Statistics', image: Images.statistics, onClick: () => setCurrentTab(0),},
    { title: 'All Orderss', image: Images.allOrders, onClick: () => setCurrentTab(1),},    
  ]

  const OrderStatistics =() => {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 60, marginBottom: 10}}>
                <OrdersStatisticsCard style={styles.orderStatisticsCard} image={Images.totalOrders} heading="Total Orders" label="7000"/>
                <OrdersStatisticsCard style={styles.orderStatisticsCard} onPress={() => navigation.navigate('OrderHistoryScreen')} image={Images.activeOrders} heading="Active Orders" label="7000"/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center', margin: 70, marginBottom: 300 }}>
                <OrdersStatisticsCard style={styles.orderStatisticsCard} image={Images.pendingOrders} heading="Pending Orders" label="7000"/>
                <OrdersStatisticsCard style={styles.orderStatisticsCard} image={Images.completedOrders} heading="Completed Orders" label="7000"/>
          </View>
        </View>
    )
  }
  return (
    <SafeAreaView>
        <Header
          left
          user
        />
        <FiltersHeader
          items={filterItems}
        />
        <View>
            {currentTab === 0 && OrderStatistics()}
            {currentTab === 1 && navigation.navigate('OrdersScreen')}
        </View>
    </SafeAreaView>
  )
}
OrderStatisticsScreen.propTypes = propTypes;
OrderStatisticsScreen.defaultProps = defaultProps;

export default OrderStatisticsScreen