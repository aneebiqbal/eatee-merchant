import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from './styles';
import { Header } from '../../../components/common';

const HistoryScreen = () => {
  return (
    <SafeAreaView>
        <Header
            user
            left
        />
        <View style={styles.container}>
            <Text>HistoryScreen</Text>
        </View>
</SafeAreaView>
  )
}

export default HistoryScreen