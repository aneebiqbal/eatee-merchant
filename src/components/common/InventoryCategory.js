import { View, Text, TouchableOpacity, SafeAreaView, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ApplicationStyles } from '../../theme'
import SearchField from './SearchField'
import ButtonIconOrText from './ButtonIconOrText'
import {Icon} from 'react-native-elements';
import InventoryCategoryModal from './../../containers/screens/InventoryScreen/CreateNewCategoryModal'
import { CaptionedText } from './CaptionedText'


const InventoryCategory = ({navigation}) => {
  const openModal = () => setCreateNewCategory(true)
  const closeModal = () => setCreateNewCategory(false)

  const [CreateNewCategory, setCreateNewCategory] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
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
            onPress={openModal}
          />
        </View>

        <View style={[ApplicationStyles.shadow, {backgroundColor:"white", marginHorizontal: 25, padding: 35, borderRadius: 6, flexDirection: 'row', justifyContent:"space-between"}]}>
            <CaptionedText
              heading={'Burger'}
              text={'Add-on-name'}
            />
          <View style={{flexDirection:"row", marginHorizontal: 10, alignItems:"center",}}>
            <View style={{paddingRight: 20,}}>
              <Switch
                trackColor={{ false: "white", true: "#F33810" }}
                thumbColor={isEnabled ? "white" : "white"}
                ios_backgroundColor="white"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <TouchableOpacity style={{paddingRight: 20}}>
              <Icon name="pencil" type="font-awesome" size={27} color="#0EBE7E"  />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="delete" type="material" size={27} color="#FF0000"  />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <InventoryCategoryModal isVisible={CreateNewCategory} closeModal={closeModal} navigation={navigation} />
    </SafeAreaView>

  )
}

export default InventoryCategory