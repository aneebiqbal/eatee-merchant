import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from './styles';
import { Header } from '../../../components/common';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
        <Header
            user
            left
        />
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
  </SafeAreaView>
  )
}

export default SettingsScreen