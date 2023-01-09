import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Images } from '../../theme';


const RastaurantDetailsSetting = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"#DDDDDD", height: '100%',}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', margin: 30}}>
            <Text style={{fontWeight:'700', fontSize: 24}}>Restaurant Details</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditRestaurantDetails')}>
                <Image
                source={Images.pencil}
                style={{
                    position:'absolute', 
                    right:20
                }}
                />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column', margin: 20, backgroundColor:'white', borderRadius: 10, padding: 30, paddingVertical:70}}>
            <View style={{flexDirection: 'row', justifyContent:"space-between",alignItems: 'flex-end', padding: 10}}>
                <Text>Branch Name</Text>
                <Text>Aneeb Store</Text>
            </View> 
            <View style={{flexDirection: 'row', justifyContent:"space-between",alignItems: 'flex-end', padding: 10}}>
                <Text>Email</Text>
                <Text>xyz@example.com</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent:"space-between",alignItems: 'flex-end', padding: 10}}>
                <Text>Mobile no</Text>
                <Text>74574357457</Text>
            </View> 
            <View style={{flexDirection: 'row', justifyContent:"space-between",alignItems: 'flex-end', padding: 10}}>
                <Text>Landline no</Text>
                <Text>74574357457</Text>
            </View>    
            <View style={{flexDirection: 'row', justifyContent:"space-between",alignItems: 'flex-end', padding: 10}}>
                <Text>Address</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            </View>  
            </View>
        </SafeAreaView>
  )
}

export default RastaurantDetailsSetting