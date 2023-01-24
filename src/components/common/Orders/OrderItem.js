import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Fonts, Images} from '../../../theme';
import ShadowCard from '../ShadowCard';
import { CaptionedText } from '../CaptionedText';
import Tag from '../Tag';
import OrderDetailsModal from '../../../containers/screens/OrdersScreen/OrderDetailsModal';

const propTypes = {};

const defaultProps = {};

const OrderItem = ({
  onPress,
  order,
  navigation
}) => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const closeModal = () => setShowItemDetails(false)
  const openModal = () => setShowItemDetails(true)

  return (
    <ShadowCard style={{margin: 20, paddingHorizontal: 28, borderRadius: 9}}>
      <View style={{
        paddingVertical: 24,
        borderBottomColor: Colors.blackCoral,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGra,
      }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{ paddingRight: 10}}>
            ORDER ID #<Text style={[, Fonts.bold]}>{order?.id}</Text>
          </Text>
          <Tag text= {order.orderStatus} type={'success'}/>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text>Create date & time: </Text><Text>{order.createdOnText}</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 28,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <View style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View style={{
            flexDirection: 'row',
          }}>
            <Image 
              source={Images.man} 
              style={{
                width: 36,
                height: 36,
                marginRight: 16,
                borderRadius: 50
              }}
            />
            <CaptionedText heading={'heading'} text={'text'} />
          </View>
          <CaptionedText heading={'pickup'} text={'service'} />
          <CaptionedText heading={order.paymentMethod ?? 'Cash'} text={'Payment'} />
          <CaptionedText heading={order.totalAmount} text={'total'} />
        </View>

        <TouchableOpacity onPress={openModal}>
          <Icon name='dots-horizontal' type='material-community' color={Colors.primary} size={28} />
        </TouchableOpacity>
      </View>
      <OrderDetailsModal isVisible={showItemDetails} closeModal={closeModal} navigation={navigation} order={order}/>
    </ShadowCard>
  )
}

export default OrderItem