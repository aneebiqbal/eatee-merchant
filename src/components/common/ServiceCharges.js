import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Picker, Modal } from 'react-native'
import React, { useState } from 'react'
import InputField from './InputField'
import { Images } from '../../theme'


const ServiceCharges = ({
  label,
}) => {
    let data = [{
      value: 'Dollar',
    }, {
      value: 'Pkr',
    }, {
      value: 'GBP',
    }];
  return (
    <SafeAreaView style={{margin: 30 }}>
       <View style={{margin: 30}}>
            <Text style={{fontWeight:'700', fontSize: 24}}>{label}</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent: 'space-around',paddingVertical: 40, backgroundColor:"white", borderRadius: 10, alignItems:'center', marginHorizontal: 10}}>
          <View>
            <Text>Service charges</Text>
          </View>
            <TextInput
              placeholder="4.7%"
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: '20%', left: 130}}
              underlineColorAndroid="transparent"
              selectionColor="#666666"
            />

            <TouchableOpacity>
              <Image
                source={Images.ok}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ServiceCharges