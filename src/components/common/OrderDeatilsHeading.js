import { View, Text } from 'react-native'
import React from 'react'

const OrderDeatilsHeading = () => {
  return (
    <View style={{backgroundColor:"white", padding: 10, marginHorizontal: 20, borderRadius: 7, flexDirection:"row", alignItems:"center", justifyContent: 'space-around'}}>
      <View style={{width: 40,}}>
        <Text>
          ITEM
        </Text>
      </View>
      <View style={{width: 50,flexDirection:"row"}}>
        <Text>QTY</Text>
      </View>
      <View style={{width: 40,}}>
        <Text>Price</Text>
      </View>
      <View style={{width: 90}}>
        <Text>TotalPrice</Text>
      </View>       

    </View>
  )
}

export default OrderDeatilsHeading