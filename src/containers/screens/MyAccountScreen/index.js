import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import { FiltersHeader, Header } from '../../../components/common';
import { Images } from '../../../theme';

const MyAccountScreen = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const filterItems = [
    { title: 'MY DETAILS', image: Images.myDetails, onClick: () => setCurrentTab(0),},
    { title: 'Change Password', image: Images.changePassword, onClick: () => setCurrentTab(1),},  
    { title: 'Rating', image: Images.rating, onClick: () => setCurrentTab(0),},

  ]
  return (
    <SafeAreaView>
        <Header
            user
            left
        />
        <FiltersHeader
          items={filterItems}
        />
        <View>
            {currentTab === 0 && <Text>1</Text>}
            {currentTab === 1 && <Text>2</Text>}
        </View>
  </SafeAreaView>
  )
}

export default MyAccountScreen