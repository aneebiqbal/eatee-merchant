import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../theme'
import { Divider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tag from './Tag'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const CustomerDetailCard = () => {
  return (
    <View style={{flex: 1, backgroundColor:'white',  marginTop: 20, marginLeft: 10, margin: 15,borderRadius: 7}}>
        <View style={{ flexDirection: 'row',  alignItems:'center',  marginRight: 10,marginTop: 30, marginLeft: 20 }}>
            <Image
                source={Images.man2}
                style={{
                height: 70,
                width: 70,
                marginRight: 15
                }}
            /> 
            <View>
                <Text style={{fontSize: 20}}>
                    Soleh Andreson
                </Text>
                 <Tag text='Customer' type={'Customer'}/>
            </View>
        </View>
        <Divider style={{marginTop: 10}}/>

        <View style={{flexDirection:'row', alignItems:'center', margin: 20}}>
            <MaterialIcons name="phone" size={35} color={Colors.secGrayMid} style={{marginRight: 30}} />  
            <Text style={{fontSize:20}}>+51 5125 626 777</Text>  
        </View>
        <Divider style={{marginTop: 10}}/>
        <View style={{flexDirection:'row', alignItems:"center", margin: 20,}}>
            <MaterialIcons name="location-on" size={35} color={Colors.secGrayMid} style={{marginRight: 30}} /> 
            <View>
                <Text style={{fontSize:20, }}>Long Horn St. </Text> 
                <Text  style={{fontSize:20,marginTop: 5 }}>Avenue 351636 London</Text> 
            </View> 
        </View>
    </View>
  )
}

export default CustomerDetailCard