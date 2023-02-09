import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ButtonIconOrText, CustomerDetailCard, FiltersHeader, Header, MapsView, OrderDeatilsHeading, OrderDetailsCard, RiderDetailsRowCard, TableRow, Tracking } from '../../../components/common';
import { Colors, Images } from '../../../theme';
import { CaptionedText } from '../../../components/common/CaptionedText';

  const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  const defaultProps = {};

const OrderDetailsScreen = ({navigation,route: {
  params: {order}
}}) => {
  console.log(order)

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
    <SafeAreaView style={[styles.container,{backgroundColor: Colors.lightGra}]}>
      <ScrollView>
        <Header
          logo
          user
        />
        <Header
          left
          title={
            <View style={styles.headerStyle}>
              <Text style={styles.white}>Order no: {order?.orderNumber}</Text>
              <Text style={styles.white}>ORDER DETAILS</Text>
            </View>
            }
          right={(
            <ButtonIconOrText
              label={'On the way'}
              iconDirection='right'
              iconName='chevron-down'
              iconType='material-community'
              iconSize={30}
              onPress={() => {

              }}
              style={styles.onMyWayButton}
            />
          )}
        />
        <View style={styles.trakingComponent}>
          <Tracking />
        </View>
        <View style={styles.mapViewHeader}>
            <View style={styles.mapView}>
              <MapsView order={order}/>
            </View>
            <View style={styles.mapView}>
              <CustomerDetailCard order={order}/>
            </View>
        </View>
        {/* <View style={{margin: 16}}>
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
    </SafeAreaView>
  )
}

OrderDetailsScreen.propTypes = propTypes;
OrderDetailsScreen.defaultProps = defaultProps;

export default OrderDetailsScreen