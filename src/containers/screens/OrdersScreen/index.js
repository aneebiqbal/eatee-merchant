import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from './styles';
import { Header, ShadowBox, ShadowCard } from '../../../components/common';


const OrdersScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header
          user
          left
          navigation={navigation}
      />
      <View style={styles.container}>
        <Text>Orders</Text>
      </View>
    </SafeAreaView>
  )
}

export default OrdersScreen