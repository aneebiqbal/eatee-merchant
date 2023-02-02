import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ApplicationStyles, Colors, Fonts, Images} from '../../../theme';
import ShadowCard from '../ShadowCard';
import { CaptionedText } from '../CaptionedText';
import Tag from '../Tag';
import OrderDetailsModal from '../../../containers/screens/OrdersScreen/OrderDetailsModal';
import { styles } from './styles';

const propTypes = {};

const defaultProps = {};

const OrderItem = ({
  onPress,
  order,
  navigation
}) => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);  const closeModal = () => setShowItemDetails(false)
  const openModal = () => setShowItemDetails(true)

  return (
    <ShadowCard style={styles.container} onPress={openModal}>
      <View style={styles.childContainer}>
        <View style={styles.orderIdStyles}>
          <Text style={styles.pr10}>
            ORDER ID #<Text style={[Fonts.bold]}>{order?.id}</Text>
          </Text>
          <Tag text= {order.orderStatus} type={'success'}/>
        </View>
        <View style={styles.fdRow}>
          <Text>Create date & time: </Text><Text>{order.createdOnText}</Text>
        </View>
      </View>
      <View style={styles.cardStyle}>
        <View style={styles.CardTextStyle}>
          <View style={styles.fdRow}>
            <Image 
              source={Images.man} 
              style={styles.imgStyle}
            />
            <CaptionedText heading={'heading'} text={'text'} />
          </View>
          <CaptionedText heading={'pickup'} text={'service'} />
          <CaptionedText heading={order.paymentMethod ?? 'Cash'} text={'Payment'} />
          <CaptionedText heading={order.totalAmount} text={'total'} />
        </View>

        <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={{marginLeft: 10}}>
          <Icon name='dots-horizontal' type='material-community' color={Colors.primary} size={28} />
        </TouchableOpacity>

        <View>
          {isVisible && (
            <View style={[modalStyles.container, ApplicationStyles.shadow]}>
              {/* {children} */}
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={modalStyles.text}>Cancel Order</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <OrderDetailsModal isVisible={showItemDetails} closeModal={closeModal} navigation={navigation} order={order}/>
    </ShadowCard>
  )
}

const modalStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 2,
    height: 49,
    width: 152,
    marginLeft: 30,
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(7, 22, 49, 0.07)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});
export default OrderItem