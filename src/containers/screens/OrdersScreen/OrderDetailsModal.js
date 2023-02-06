import { View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import { FullwidthButton, MenuItem, Tag } from '../../../components/common';
import { Colors, Fonts } from '../../../theme';
import Modal from "react-native-modal";
import { Divider } from 'react-native-paper';
import { CaptionedText } from '../../../components/common/CaptionedText';
import { styles } from './styles';


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
      style={styles.modalStyle}
    >
      <SafeAreaView style={styles.flex1}>
      <View
        style={styles.modalContainer}
      >
        <View>
          <View style={styles.captionTextStyle}>
            <CaptionedText heading={order.id} text='Order ID #'/>
            <CaptionedText heading='Payment Type:' text={order.paymentMethodId == 0 ? 'Cash' : 'Card'} direction='row' textStyle={[Fonts.bold, {color: Colors.primary}]}/>
          </View>
          <Divider/>

          {order.items.map((item, index) => {
            return (
              <MenuItem item ={item} key={index}/>
            )
          })}
        </View>
        <View>
          <View style={styles.captionTextStyle}>
            <Text>Type</Text>
            <Tag text={order?.orderStatus} />
          </View>

          <View style={styles.captionTextStyle}>
            <Text>Promo Code</Text>
            <Tag text='0586' />
          </View>
          <View style={styles.captionTextStyle}>
            <Text>Tax</Text>
            <Text>$ {order.totalAmount}</Text>
          </View>
          <Divider/>
          <View style={styles.captionTextStyle}>
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