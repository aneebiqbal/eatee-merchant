import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ButtonIconOrText, CustomerDetailCard, FiltersHeader, Header, MapsView, OrderDeatilsHeading, OrderDetailsCard, RiderDetailsRowCard, Tracking } from '../../../components/common';
import { Colors, Images } from '../../../theme';

  const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  const defaultProps = {};

const OrderDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: Colors.lightGra}]}>
      <ScrollView>
        <Header
          logo
          user
        />
        <Header
          left
          title={<View style={{ flexDirection: 'column', paddingLeft: 50}}><Text style={{color: 'white'}}>Order no: 1675757</Text><Text style={{color: 'white'}}>ORDER DETAILS</Text></View>}
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

        <OrderDeatilsHeading/>
        <OrderDetailsCard/>
        <OrderDetailsCard/>
        <OrderDetailsCard/>
        <OrderDetailsCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

OrderDetailsScreen.propTypes = propTypes;
OrderDetailsScreen.defaultProps = defaultProps;

export default OrderDetailsScreen