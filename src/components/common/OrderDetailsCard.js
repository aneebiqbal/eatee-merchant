import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images } from '../../theme'

const OrderDetailsCard = () => {
  return (
    <View style={{flexDirection:"row", backgroundColor:'white', padding: 30, marginHorizontal: 20, borderRadius: 7, margin: 20}}>
      <Image
          source={Images.beefBurger}
          style={{
            width: 70,
            height: 40}}
       />
       <View style={{flexDirection:'column', justifyContent:"center", left: 40}}>
          <Text style={{color:'#0A0B0C', fontSize: 16, fontWeight:'600'}}>
          Beef Burger
          </Text>
          <Text style={{color:'#0A0B0C', fontSize: 12, fontWeight:'400'}}>
          Lorem ipsum dolor sit amet, consecte
          </Text>
       </View>
    </View>
  )
}

export default OrderDetailsCard