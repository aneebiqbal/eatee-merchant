import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ButtonIconOrText, Header, SearchField } from '../../../components/common';
import OrderItem from '../../../components/common/Orders/OrderItem';
import { Colors } from '../../../theme';
import OrderDetailsModal from './OrderDetailsModal';


const OrdersScreen = ({navigation}) => {
  const [showItemDetails, setShowItemDetails] = useState(false)

  const closeModal = () => setShowItemDetails(false)
  const openModal = () => setShowItemDetails(true)

  return (
    <SafeAreaView style={{
      backgroundColor: Colors.white,
      flex: 1
    }}>
      <Header
        user
        left
        navigation={navigation}
      />
      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <SearchField style={{
          margin: 20,
          width: '30%',
          height: 48,
          borderRadius: 48
        }} onChange={()=>console.log('test')}/>
        <View style={{
          flexDirection: 'row'
        }}>
          <ButtonIconOrText label={'All'} buttonVariant={'circle'} style={{ marginVertical: 28, marginHorizontal: 4, width: '19%' }}/>
          <ButtonIconOrText label={'Pending'} buttonVariant={'circle'} style={{ marginVertical: 28,  marginHorizontal: 4, width: '19%' }} />
          <ButtonIconOrText label={'Completed'} buttonVariant={'circle'} style={{ marginVertical: 28, marginHorizontal: 4, width: '19%' }} />
          <ButtonIconOrText label={'Cancelled'} buttonVariant={'circle'} style={{ marginVertical: 28, marginHorizontal: 4, width: '19%' }} />
        </View>
      </View>
      <ScrollView>
        <OrderItem onPress={openModal} />
        <OrderItem onPress={openModal}/>
        <OrderItem onPress={openModal}/>
        <OrderItem onPress={openModal}/>
      </ScrollView>
      <OrderDetailsModal isVisible={showItemDetails} closeModal={closeModal} />
    </SafeAreaView>
  )
}

export default OrdersScreen