import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FiltersHeader, Header, OrdersStatisticsCard} from '../../../components/common';
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
    { title: 'Statistics', image: currentTab == 0 ? Images.statisticsOn : Images.statistics, onClick: () => setCurrentTab(0),},
    { title: 'All Orderss', image: currentTab == 1 ? Images.allOrdersOn : Images.allOrders, onClick: () => setCurrentTab(1),},    
  ]

  const OrderStatistics =() => {
    return (
      <View style={[styles.container, styles.justifyContentC]}>
            <View style={styles.firstTwoBox}>
                <OrdersStatisticsCard style={styles.orderStatisticsCard} image={Images.totalOrders} heading="Total Orders" label="7000"/>
                <OrdersStatisticsCard style={styles.orderStatisticsCard} image={Images.activeOrders} heading="Active Orders" label="7000"/>
            </View>
            <View style={styles.lastTwoBox}>
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