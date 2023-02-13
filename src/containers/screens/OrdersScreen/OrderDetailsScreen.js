import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ButtonIconOrText, CustomerDetailCard, FiltersHeader, Header, MapsView, OrderDeatilsHeading, OrderDetailsCard, RiderDetailsRowCard, TableRow, Tracking } from '../../../components/common';
import { ApplicationStyles, Colors, Images } from '../../../theme';
import { CaptionedText } from '../../../components/common/CaptionedText';
import { Divider } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import { WP } from '../../../utils';
import OrderChangeModal from './OrderStatusChangeModal';
import strings from '../../../constants/strings';

  const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  const defaultProps = {};

const OrderDetailsScreen = ({navigation,route: {
  params: {order}
}}) => {
  const [orderStatusTypeId, setOrderStatusTypeId] = useState(1);
  const [isVisible, setIsVisible] = useState(false);  const closeModal = () => setShowItemDetails(false)
  const [showItemDetails, setShowItemDetails] = useState(false);
  const openModal = () => setShowItemDetails(true)

  const itemImage = (item) => (
    <View style={styles.fdrow}>
      <Image 
        source={Images.beefBurger} 
        style={styles.imgStyle}
      />
      <CaptionedText heading={item.heading} text={item.text} />
    </View>
  )
  return (
    <SafeAreaView style={[styles.container,styles.backgroundColor]}>
        <Header
          logo
          user
        />
        <Header
          left
          title={
            <View style={styles.headerStyle}>
              <Text style={styles.white}>{strings.orderId} {order?.orderNumber}</Text>
              <Text style={styles.white}>{strings.orderDetails}</Text>
            </View>
          }
          right={(
               <ButtonIconOrText
                label={order.orderStatus}
                iconDirection='right'
                iconName='pending-actions'
                iconType='MaterialIcons'
                iconSize={28}
                onPress={openModal}
                style={styles.onMyWayButton}
              /> 
          )}
        />
        <ScrollView>
          <View style={styles.trakingComponent}>
            <Tracking orderDetail={order}/>
          </View>
          <View style={styles.mapViewHeader}>
              <View style={styles.mapView}>
                <MapsView order={order}/>
              </View>
              <View style={styles.mapView}>
                <CustomerDetailCard order={order}/>
              </View>
          </View>

          {/* <View style={styles.margin16}>
            <RiderDetailsRowCard/>
          </View> */}

          <TableRow
            rowItems={[
              {name: 'Item', width: '45%'}, 
              {name: 'Quantity', width: '20%'}, 
              {name: 'Price', width: '15%'}, 
              {name: 'Total Price', width: '20%'}, 
              // {name: '', width: '12%' }
            ]}
          />
          {
            order.items.map((item, index)=> {
              return (
                <TableRow 
                  key={index}
                  rowItems={[
                    {
                      column: (itemImage({
                        heading: item.name,
                        text: 'Lorem ipsum text'
                      })), 
                      width: '50%'
                    },
                    {name: item.quantity, width: '20%'}, 
                    {name: item.price, width: '15%'}, 
                    {name: item.price, width: '20%'}, 
                    // {column: (<Image
                    //   source={Images.cross}
                    //   style={{
                    //     height: 20,
                    //     width: 20,
                    //   }}
                    // />), width: '10%' }
                  ]}
                />
              )
            })
          }
      </ScrollView>
      <OrderChangeModal isVisible={showItemDetails} closeModal={closeModal} navigation={navigation} order={order}/>
    </SafeAreaView>
  )
}

OrderDetailsScreen.propTypes = propTypes;
OrderDetailsScreen.defaultProps = defaultProps;

export default OrderDetailsScreen