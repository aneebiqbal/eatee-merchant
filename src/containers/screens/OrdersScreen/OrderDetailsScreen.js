import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';
import { CustomerDetailCard, Header, MapsView, RiderDetailsRowCard, Tracking } from '../../../components/common';
import { Colors } from '../../../theme';
import MapView from 'react-native-maps';



const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  const defaultProps = {};

const OrderDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: Colors.lightGra}]}>
        <Header
            left
            user
        />
        <View style={{flexDirection:'row', backgroundColor: Colors.white}}>
            <Tracking />
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between', flex: 1}}>
            <View style={{flex: 0.5, height: '38%', width: '60%', marginTop: 24, marginLeft: 10, backgroundColor:'white', padding: 10, borderRadius: 10}}>
              <MapsView/>
            </View>
            <View style={{flex: 0.5, height: '42%', width: '60%', margin: 1, padding: 1}}>
              <CustomerDetailCard/>
            </View>
        </View>
        {/* <View style={{marginBottom: 5}}>
          <RiderDetailsRowCard/>
        </View> */}
    </SafeAreaView>
  )
}

OrderDetailsScreen.propTypes = propTypes;
OrderDetailsScreen.defaultProps = defaultProps;

export default OrderDetailsScreen