import { View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import { FullwidthButton, MenuItem, Tag } from '../../../components/common';
import { Colors, Fonts } from '../../../theme';
import Modal from "react-native-modal";
import { Divider } from 'react-native-paper';
import { CaptionedText } from '../../../components/common/CaptionedText';


const OrderDetailsModal = ({
  isVisible,
  closeModal,
  navigation,
  order
}) => {
  console.log(order)

  return (
    <Modal 
      isVisible={isVisible} 
      coverScreen={true} 
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationIn='slideInRight'
      animationOut='slideOutRight'
      style={{ margin: 0, flex: 1, backgroundColor: 'white', width: '70%', height: '100%', alignSelf: 'flex-end' }}
    >
      <SafeAreaView style={{flex: 1}}>
      <View
        style={{ flex: 1, paddingHorizontal: 35, justifyContent: 'space-between', flexDirection: 'column' }}
      >
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <CaptionedText heading={order.id} text='Order ID #'/>
            <CaptionedText heading='Payment Type:' text={order.paymentMethod ?? 'Cash'} direction='row' textStyle={[Fonts.bold, {color: Colors.primary}]}/>
          </View>
          <Divider/>

          {order.items.map((item, index) => {
            return (
              <MenuItem item ={item} key={index}/>
            )
          })}
        </View>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <Text>Type</Text>
            <Tag text={order?.orderStatus} />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <Text>Promo Code</Text>
            <Tag text='0586' />
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <Text>Tax</Text>
            <Text>$ {order.totalAmount}</Text>
          </View>
          <Divider/>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <Text style={[Fonts.bold, Fonts.small]}>Total</Text>
            <Text style={[Fonts.bold, Fonts.small, { color: Colors.primary }]}>$ {order?.totalAmount}</Text>
          </View>
          <FullwidthButton label='Track Order Details' onPress= {() => navigation.navigate('OrderHistoryScreen', { order })}/>
        </View>
      </View>
      </SafeAreaView>
    </Modal>
  )
}

export default OrderDetailsModal