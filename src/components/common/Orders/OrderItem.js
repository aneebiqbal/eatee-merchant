import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ApplicationStyles, Colors, Fonts, Images} from '../../../theme';
import ShadowCard from '../ShadowCard';
import { CaptionedText } from '../CaptionedText';
import Tag from '../Tag';
import OrderDetailsModal from '../../../containers/screens/OrdersScreen/OrderDetailsModal';
import { styles } from './styles';
import strings from '../../../constants/strings';

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
            {strings.orderId}
            <Text style={[Fonts.bold]}>{order?.orderNumber}</Text>
          </Text>
          <Tag text={order.orderStatus} type={strings.success}/>
        </View>
        <View style={styles.fdRow}>
          <Text>{strings.dateAndTime}</Text><Text>{order.createdOnText}</Text>
        </View>
      </View>
      <View style={styles.cardStyle}>
        <View style={styles.CardTextStyle}>
          <View style={styles.fdRow}>
            <Image
              source={
                order.createdBy.imageUrl !== null &&
                order.createdBy.imageUrl !== undefined &&
                order.createdBy.imageUrl !== ''
                  ? {uri: order.createdBy.imageUrl}
                  : require('../../../assets/images/man2.png')
              }
              style={styles.imgStyle}
            />
            <CaptionedText heading={order.createdBy.firstName + ' ' + order.createdBy.lastName}/>
          </View>
          <CaptionedText heading={order?.orderTypeId == 0 ? strings.delivery : strings.pickup} text={strings.service}/>
          <CaptionedText heading={order?.paymentMethodId == 0 ? strings.cash : strings.card} text={strings.payment}/>
          <CaptionedText heading={order?.totalAmount} text={strings.total}/>
        </View>

        <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={styles.ml10}>
          <Icon name='dots-horizontal' type='material-community' color={Colors.primary} size={28}/>
        </TouchableOpacity>

        <View>
          {isVisible && (
            <View style={[modalStyles.container, ApplicationStyles.shadow]}>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={modalStyles.text}>{strings.cancelOrder}</Text>
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