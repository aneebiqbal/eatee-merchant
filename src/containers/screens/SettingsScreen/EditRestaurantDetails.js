import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { ButtonIconOrText, FullwidthButton, Header, InputField } from '../../../components/common'
import strings from '../../../constants/strings'

const EditRestaurantDetails = () => {
  return (
    <SafeAreaView>
        <Header
            user
            left
        />
        <View style={{padding: 30}}>
            <Text style={{fontWeight:'700', fontSize: 24}}>Edit Restaurant Details</Text>
        </View>

        <View style={{flexDirection: 'column', backgroundColor:'white', justifyContent:'space-around', margin: 20, borderRadius: 9,}}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', padding: 20}}>
                    <Text>Brach Name</Text>
                    <TextInput
                        placeholder="Aneeb Iqbal"
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={{flexDirection: 'column', padding: 20}}>
                    <Text>Email</Text>
                    <TextInput
                        placeholder="xyz@xyz.com"
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', padding: 20}}>
                    <Text>Mobile No.</Text>
                    <TextInput
                        placeholder="033475675675"
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={{flexDirection: 'column', padding: 20}}>
                    <Text>Landline No.</Text>
                    <TextInput
                        placeholder="934743464368"
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'column', left : 10, padding: 10}}>
                    <Text>Address</Text>
                    <TextInput
                        placeholder='Address'
                        style={{height: 90, width: 640, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
            </View>

            <View style={{flexDirection:"row", justifyContent: 'flex-end', marginHorizontal: 40, padding: 20,}}>
                <ButtonIconOrText 
                 label={'Cancel'}
                 style={{ height: 58, backgroundColor: '#FFC018', width: 160, marginHorizontal:20 }}
                />
                <ButtonIconOrText 
                    label={'Update'}
                    style={{ height: 58, backgroundColor: '#F33810',width: 160 }}
                />

            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default EditRestaurantDetails