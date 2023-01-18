import { View, Text } from 'react-native'
import React from 'react'

const OrderDeatilsHeading = () => {
  return (
    <View style={{backgroundColor:"white", padding: 10, marginHorizontal: 20, borderRadius: 7, flexDirection:"row", alignItems:"center", justifyContent: 'space-around', margin: 6, marginTop: 10}}>
      <View style={{right: 30}}>
        <Text>
          ITEM
        </Text>
      </View>
      <View style={{width: 50, left: 30}}>
        <Text>QTY</Text>
      </View>
      <View style={{width: 40,right: 30}}>
        <Text>Price</Text>
      </View>
      <View style={{width: 90, right: 60}}>
        <Text>TotalPrice</Text>
      </View>       

    </View>
  )
}

export default OrderDeatilsHeading