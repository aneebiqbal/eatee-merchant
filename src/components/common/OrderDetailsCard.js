import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../theme'

const OrderDetailsCard = () => {
  return (
    <View style={{flexDirection:"row", backgroundColor:'white', padding: 30, marginHorizontal: 20, borderRadius: 7, margin: 6}}>
      <View style={{flexDirection:"row"}}>
        <Image
            source={Images.beefBurger}
            style={{
              width: 70,
              height: 40}}
        />
       <View style={{flexDirection:'column', justifyContent:"center", left: 10, width: 120,}}>
          <Text style={{color:'#0A0B0C', fontSize: 16, fontWeight:'600'}}>
          Beef Burger
          </Text>
          <Text style={{color:'#0A0B0C', fontSize: 12, fontWeight:'400'}}>
          Lorem ipsum dolor
          </Text>
       </View>
      </View>

      <View style={{left: 55, top: 10, width: 45}}>
        <Text>10X</Text>
      </View>

      <View style={{left: 135, top: 10, width: 45}}>
        <Text>£1200</Text>
      </View>

      <View style={{left: 245, top: 10, width: 45}}>
        <Text>£1200</Text>
      </View>

      <TouchableOpacity style={{left: 330, top: 10}}>
        <Image
          source={Images.cross}
          style={{
            height: 20,
            width: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default OrderDetailsCard