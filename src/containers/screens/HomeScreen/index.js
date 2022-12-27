import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, ShadowBox, ShadowCard } from '../../../components/common';
import strings from '../../../constants/strings';
import { Images } from '../../../theme';


const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView>
        <Header
          logo
          user
        />
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 40 }}>
            <ShadowCard style={{width: 230, paddingVertical: 50, borderRadius: 8}} image={Images.ordersSelected} heading="ORDERS" onPress={() => navigation.navigate('OrdersStatisticsScreen')}/>
            <ShadowCard style={{width: 230, paddingVertical: 50, borderRadius: 8}} image={Images.inventory} heading="INVENTORY" onPress={() => navigation.navigate('InventoryScreen')}/>
            <ShadowCard style={{width: 230, paddingVertical: 50, borderRadius: 8}} image={Images.history} heading="HISTORY" onPress={() => navigation.navigate('HistoryScreen')}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems: 'center', margin: 40 }}>
            <ShadowCard style={{width: 250, paddingVertical: 50, borderRadius: 8}} image={Images.accounts} heading="MY ACCOUNT" onPress={() => navigation.navigate('MyAccountScreen')}/>
            <ShadowCard style={{width: 250, paddingVertical: 50, borderRadius: 8}} image={Images.settings} heading="SETTINGS" onPress={() => navigation.navigate('SettingsScreen')}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;