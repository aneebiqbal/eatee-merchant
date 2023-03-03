import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import { FiltersHeader, Header, SelectLocation } from '../../../components/common';
import { Images } from '../../../theme';

const MyAccountScreen = ({navigation}) => {
  const [currentTab, setCurrentTab] = useState(0)

  const filterItems = [
    { title: 'Location', image: Images.myDetails, onClick: () => setCurrentTab(0),},
    { title: 'Change Password', image: Images.changePassword, onClick: () => setCurrentTab(1),},  
    { title: 'Rating', image: Images.rating, onClick: () => setCurrentTab(2),},

  ]
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header
            user
            left
        />
        <FiltersHeader
          items={filterItems}
        />
        <View style={{height: '100%'}}>
            {currentTab === 0 && <Text>1</Text>}
            {currentTab === 1 && <SelectLocation navigation={navigation}/>}
            {currentTab === 2 && <Text>3</Text>}
        </View>
  </SafeAreaView>
  )
}

export default MyAccountScreen