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
  debugger;
  console.log(order)

  const itemImage = (item) => (
    <View style={{
      flexDirection: 'row',
    }}>
      <Image 
        source={Images.beefBurger} 
        style={{
          width: 36,
          height: 36,
          marginRight: 16,
        }}
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
          title={<View style={{ flexDirection: 'column', paddingLeft: 50}}><Text style={{color: 'white'}}>Order no: {order?.id}</Text><Text style={{color: 'white'}}>ORDER DETAILS</Text></View>}
          right={(
            <ButtonIconOrText
              label={'On the way'}
              iconDirection='right'
              iconName='chevron-down'
              iconType='material-community'
              iconSize={30}
              onPress={() => {

              }}
              style={{ height: 58, backgroundColor: '#0EBE7E' }}
            />
          )}
        />
        <View style={{flexDirection:'row', backgroundColor: Colors.white, margin: 16}}>
          <Tracking />
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between' }}>
            <View style={{height: 300, width: '49%', backgroundColor: 'white', padding: 16, borderRadius: 8}}>
              <MapsView/>
            </View>
            <View style={{height: 300, width: '49%', backgroundColor: 'white', padding: 16, borderRadius: 8}}>
              <CustomerDetailCard/>
            </View>
        </View>
        {/* <View style={{margin: 16}}>
          <RiderDetailsRowCard/>
        </View> */}

        <TableRow
          rowItems={[
            {name: 'Item', width: '40%'}, 
            {name: 'Quantity', width: '20%'}, 
            {name: 'Price', width: '15%'}, 
            {name: 'Total Price', width: '20%'}, 
            {name: '', width: '10%' }
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
                    width: '40%'
                  },
                  {name: item.quantity, width: '20%'}, 
                  {name: item.price, width: '15%'}, 
                  {name: item.price, width: '20%'}, 
                  {column: (<Image
                    source={Images.cross}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />), width: '10%' }
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