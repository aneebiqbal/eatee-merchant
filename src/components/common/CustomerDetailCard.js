import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../theme'
import { Divider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tag from './Tag'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HP, WP } from '../../utils'


const CustomerDetailCard = ({order}) => {
  return (
    <View style={{backgroundColor:'white', flex: 1}}>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={
                  order.createdBy.imageUrl !== null &&
                  order.createdBy.imageUrl !== undefined &&
                  order.createdBy.imageUrl !== ''
                    ? {uri: order.createdBy.imageUrl}
                    : require('../../assets/images/man3.png')
                } 
                style={{
                    width: WP(8),
                    height: HP(5),
                    marginRight: 16,
                    borderRadius: 50
                }}
            /> 
            <View>
                <Text style={{fontSize: 20}}>
                    {order.createdBy.firstName + ' ' + order.createdBy.lastName}
                </Text>
                 <Tag text='Customer' type={'Customer'}/>
            </View>
        </View>
        <Divider style={{marginTop: 10}}/>

        <View style={{flexDirection:'row', alignItems:'center', margin: 20}}>
            <MaterialIcons name="phone" size={35} color={Colors.secGrayMid} style={{marginRight: 30}} />  
            <Text style={{fontSize:20}}>
                {
                 order.createdBy.mobile !== null &&
                 order.createdBy.mobile !== undefined &&
                 order.createdBy.mobile !== ''
                 ? order?.createdBy.mobile
                 : '0000-0000-0000'
                }
            </Text>  
        </View>
        <Divider style={{marginTop: 10}}/>
        <View style={{flexDirection:'row', alignItems:"center", margin: 20,}}>
            <MaterialIcons name="location-on" size={35} color={Colors.secGrayMid} style={{marginRight: 30}} /> 
            <View>
                <Text numberOfLines={4} style={{fontSize:20, width: WP(30) }}>{order.customerAddress.addressLine1}</Text> 
            </View> 
        </View>
    </View>
  )
}

export default CustomerDetailCard