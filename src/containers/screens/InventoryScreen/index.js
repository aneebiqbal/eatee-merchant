import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import { FiltersHeader, Header } from '../../../components/common';
import { Images } from '../../../theme';


const InventoryScreen = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const filterItems = [
    { title: 'Category', image: Images.category, onClick: () => setCurrentTab(0),},
    { title: 'Menu', image: Images.menu, onClick: () => setCurrentTab(1),},    
    { title: 'Add-ons', image: Images.addons, onClick: () => setCurrentTab(2),},
    { title: 'Deal', image: Images.deal, onClick: () => setCurrentTab(3),},
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
        <View style={styles.container}>
            {currentTab === 0 && <Text>Tab 0</Text>}
            {currentTab === 1 && <Text>Tab 1</Text>}
            {currentTab === 2 && <Text>Tab 2</Text>}
            {currentTab === 3 && <Text>Tab 3</Text>}
            {currentTab === 4 && <Text>Tab 4</Text>}
        </View>
  </SafeAreaView>
  )
}

export default InventoryScreen