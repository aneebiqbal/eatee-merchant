import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from './styles';
import { Header } from '../../../components/common';

const MyAccountScreen = () => {
  return (
    <SafeAreaView>
        <Header
            user
            left
        />
        <View style={styles.container}>
            <Text>MY account screen</Text>
        </View>
  </SafeAreaView>
  )
}

export default MyAccountScreen