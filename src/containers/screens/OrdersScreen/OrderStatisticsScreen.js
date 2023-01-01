import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

import {Header, OrdersStatisticsCard, ShadowCard} from '../../../components/common';
import { styles } from './styles';
import { Images } from '../../../theme';


const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };
  
  const defaultProps = {};
const OrderStatisticsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <Header
          left
          user
        />
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 60, marginBottom: 10}}>
                <OrdersStatisticsCard style={{width: 300, paddingVertical: 10, borderRadius: 8}} onPress={() => navigation.navigate('OrdersScreen')} image={Images.totalOrders} heading="Total Orders" label="7000"/>
                <OrdersStatisticsCard style={{width: 300, paddingVertical: 10, borderRadius: 8}} onPress={() => navigation.navigate('OrderHistoryScreen')} image={Images.activeOrders} heading="Active Orders" label="7000"/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center', margin: 70, marginBottom: 300 }}>
                <OrdersStatisticsCard style={{width: 300, paddingVertical: 10, borderRadius: 8}} image={Images.pendingOrders} heading="Pending Orders" label="7000"/>
                <OrdersStatisticsCard style={{width: 300, paddingVertical: 10, borderRadius: 8}} image={Images.completedOrders} heading="Completed Orders" label="7000"/>
          </View>
        </View>
    </SafeAreaView>
  )
}
OrderStatisticsScreen.propTypes = propTypes;
OrderStatisticsScreen.defaultProps = defaultProps;

export default OrderStatisticsScreen