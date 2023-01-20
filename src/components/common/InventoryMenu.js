import { View, Text, Image, Switch, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ApplicationStyles, Images } from '../../theme'
import { Icon } from 'react-native-elements'
import SearchField from './SearchField'
import ButtonIconOrText from './ButtonIconOrText'

const InventoryMenu = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
    <SafeAreaView >
        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <SearchField
            placeholder={'Search'}
            style={{
              margin: 20,
              width: '30%',
              height: 48,
              borderRadius: 48
            }} onChange={()=>console.log('test')}
          />
          <ButtonIconOrText
            label={'Craete New'}
            style={{
              height: 55,
              marginTop: 15,
              marginRight: 35,
              borderRadius: 6
            }}
            iconDirection="right"
            iconName={'plus'}
            iconType={'Entypo'}
            onPress={() => navigation.navigate('CreateNewMenuScreen')}
          />
        </View>

       <View style={[ApplicationStyles.shadow, {backgroundColor:"white", marginHorizontal: 25, padding: 35, borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between'}]}>
            <View style={{flexDirection:'row'}}>
              <Image
                  source={Images.food}
                  style={{
                    height: 40,
                    width: 40,
                  }}
              />
              <View style={{ flexDirection:"column", left: 10}}>
                <Text style={{width: 160, color: '#F33810', fontWeight: '700', fontSize: 14}}>Salmon/Shake Dragon</Text>
                <Text>Extra Spicy</Text>
              </View>
            </View>

            <View style={{ flexDirection:"column", right: 10 }}>
              <Text style={{width: 110, fontWeight: '600', fontSize: 14}}>Cheese</Text>
              <Text>Category name</Text>
            </View>

            <View style={{ flexDirection:"column", left:5 }}>
              <Text style={{width: 160, fontWeight: '600', fontSize: 14}}>Cheese</Text>
              <Text>Category name</Text>
            </View>

              <View style={{flexDirection:"row", marginHorizontal: 10, alignItems:"center",}}>
                <View style={{right: 40}}>
                  <Switch
                      trackColor={{ false: "white", true: "#F33810" }}
                      thumbColor={isEnabled ? "white" : "white"}
                      ios_backgroundColor="white"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                  />
                </View>
                <TouchableOpacity style={{right: 20}}>
                  <Icon name="pencil" type="font-awesome" size={25} color="#0EBE7E"  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="delete" type="material" size={25} color="#FF0000"  />
                </TouchableOpacity>
              </View>
         </View>
      </SafeAreaView>
      </ScrollView>
  )
}

export default InventoryMenu