import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import {styles} from './styles';
import { ButtonIconOrText, Header, OrderHistoryItem, OrderItem, SearchField } from '../../../components/common';
import { Colors, Images } from '../../../theme';

const HistoryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', flex: 1}}>
        <Header
            user
            left
            navigation={navigation}
        />
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#1A1E22',
          justifyContent: 'center',
        }}>
          <ButtonIconOrText label={'All'} buttonVariant={'circle'} style={{ marginVertical: 20, marginHorizontal: 6, width: '17%' }}/>
          <ButtonIconOrText label={'Pending'} buttonVariant={'circle'} style={{ marginVertical: 20,  marginHorizontal: 6, width: '17%' }} />
          <ButtonIconOrText label={'Completed'} buttonVariant={'circle'} style={{ marginVertical: 20, marginHorizontal: 6, width: '17%' }} />
          <ButtonIconOrText label={'Cancelled'} buttonVariant={'circle'} style={{ marginVertical: 20, marginHorizontal: 6, width: '17%' }} />
        </View>
        <View 
        style={{
          flexDirection: 'row',
        }}
        >
        <SearchField 
          style={{
            margin: 15,
            width: '30%',
            height: 48,
            borderRadius: 48
          }} 
          onChange={()=>console.log('test')}
          placeholder='Bill ID'
        />
        <SearchField 
          style={{
            margin: 15,
            width: '30%',
            height: 48,
            borderRadius: 48
          }} 
          onChange={()=>console.log('test')}
          placeholder='Date'
        />
      </View>
      <ScrollView>
        <OrderHistoryItem 
          onPress={{}}
          image={Images.food}
          heading={'Salmon/Shake Dragon'} text={'4 more items'}
          quantity={'4X'}
          cash={'Cash'} Payment={'Payment'}
          price={'£ 36.00'} total={'Total'}
       />
        <OrderHistoryItem 
          onPress={{}}
          image={Images.food}
          heading={'Salmon/Shake Dragon'} text={'4 more items'}
          quantity={'4X'}
          cash={'Cash'} Payment={'Payment'}
          price={'£ 36.00'} total={'Total'}
       />
        <OrderHistoryItem 
          onPress={{}}
          image={Images.food}
          heading={'Salmon/Shake Dragon'} text={'4 more items'}
          quantity={'4X'}
          cash={'Cash'} Payment={'Payment'}
          price={'£ 36.00'} total={'Total'}
        />
        <OrderHistoryItem 
          onPress={{}}
          image={Images.food}
          heading={'Salmon/Shake Dragon'} text={'4 more items'}
          quantity={'4X'}
          cash={'Cash'} Payment={'Payment'}
          price={'£ 36.00'} total={'Total'}
        />
      </ScrollView> 
</SafeAreaView>
  )
}

export default HistoryScreen