import { View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import { FullwidthButton, MenuItem, Tag } from '../../../components/common';
import { Colors, Fonts } from '../../../theme';
import Modal from "react-native-modal";
import { Divider } from 'react-native-paper';
import { CaptionedText } from '../../../components/common/CaptionedText';
import { styles } from './styles';
import strings from '../../../constants/strings';


const OrderDetailsModal = ({
  isVisible,
  closeModal,
  navigation,
  order
}) => {
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
        <View style={styles.modalContainer}>
          <View>
            <View style={styles.captionTextStyle}>
              <CaptionedText heading={order?.orderNumber} text={strings.orderId}/>
              <CaptionedText heading={strings.paymentType} text={order.paymentMethodId == 0 ? strings.cash : strings.card}
                direction='row'
                textStyle={[Fonts.bold, styles.primaryColor]}
              />
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
              <Text>{strings.type}</Text>
              <Tag text={order?.orderStatus}/>
            </View>
            <Divider/>
            <View style={styles.captionTextStyle}>
              <Text style={[Fonts.bold, Fonts.small]}>{strings.total}</Text>
              <Text style={[Fonts.bold, Fonts.small, styles.primaryColor]}>
                {strings.currency}{order?.totalAmount}
              </Text>
            </View>
            <FullwidthButton label={strings.trackOrderDetails}
              onPress= {() => navigation.navigate('OrderHistoryScreen',
              { order })}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default OrderDetailsModal