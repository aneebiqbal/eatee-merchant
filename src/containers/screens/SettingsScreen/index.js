import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles';
import { Header, FiltersHeader, RastaurantDetailsSetting, ServiceCharges, SelectLocation } from '../../../components/common';
import { MaterialIcons } from 'react-native-vector-icons';
import { Images } from '../../../theme';
import { useState } from 'react';

const SettingsScreen = ({navigation}) => {

  const [currentTab, setCurrentTab] = useState(0)

  const filterItems = [
    { title: 'Restaurant Details', image: Images.restaurantDetails, onClick: () => setCurrentTab(0),},
    { title: 'Service Charges', image: Images.serviceCharges, onClick: () => setCurrentTab(1),},    
    { title: 'Currency', image: Images.currency, onClick: () => setCurrentTab(2),},
    { title: 'Location', image: Images.orderLimit, onClick: () => setCurrentTab(3),},
    { title: 'Timings', image: Images.timings, onClick: () => setCurrentTab(4),},
  ]
  return (
    <SafeAreaView style={styles.container}>
        <Header
            user
            left
        />
        <FiltersHeader
          items={filterItems}
        />
        <View style={styles.container}>
            {currentTab === 0 && <RastaurantDetailsSetting navigation={navigation}/>}
            {currentTab === 1 && <ServiceCharges label={'Set Service Charges'}/>}
            {currentTab === 2 && <ServiceCharges label={'Set Currency'}/>}
            {currentTab === 3 && <Text>hi</Text>}
            {currentTab === 4 && <Text>Tab 4</Text>}
        </View>
  </SafeAreaView>
  )
}

export default SettingsScreen