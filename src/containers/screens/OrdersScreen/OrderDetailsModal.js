import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { FullwidthButton, MenuItem, Tag } from '../../../components/common';
import { Colors, Fonts } from '../../../theme';
import Modal from "react-native-modal";
import { Divider } from 'react-native-paper';
import { CaptionedText } from '../../../components/common/CaptionedText';


const OrderDetailsModal = ({isVisible, closeModal}) => {
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
            <CaptionedText heading='73743436' text='Order ID #' />
            <CaptionedText heading='Payment Type:' text='Cash' direction='row' textStyle={[Fonts.bold, {color: Colors.primary}]}/>
          </View>
          <Divider/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </View>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <Text>Type</Text>
            <Tag text='Delivery' />
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
            <Text>$ 12</Text>
          </View>
          <Divider/>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
          }}>
            <Text style={[Fonts.bold, Fonts.small]}>Total</Text>
            <Text style={[Fonts.bold, Fonts.small, { color: Colors.primary }]}>$ 12</Text>
          </View>
          <FullwidthButton label='Track Order Details'/>
        </View>
      </View>
      </SafeAreaView>
    </Modal>
  )
}

export default OrderDetailsModal