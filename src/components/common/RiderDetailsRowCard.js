import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images } from '../../theme'

const RiderDetailsRowCard = () => {
  return (
    <View style={{backgroundColor:'gray', padding: 60, flexDirection: 'row', flex: 1}}>
      <View style={{justifyContent:'center',}}>
        <Image
          source={Images.man3}
          style={{
            height: 90,
            width: 90,
            right: 40
          }}
        />
      </View>
      <View style={{flexDirection:'column', flex: 0.5}}>
          <Text>hi</Text>
      </View>
    </View>
  )
}

export default RiderDetailsRowCard