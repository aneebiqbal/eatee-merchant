import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/OrdersStatisticsCard';
import {ApplicationStyles, Colors, Fonts, Images} from '../../../theme';


const propTypes = {};

const defaultProps = {};
const OrdersStatisticsCard = ({heading, label, image, style, onPress, children}) => {
  return (
    <View onPress={onPress} style={[styles.container, ApplicationStyles.shadow, style]}>
    {image && 
    <View style={[styles.innerContainer]}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={[Fonts.extraSmall, {color: Colors.textGray, marginLeft: 2}]}>
          {heading}
        </Text>
        <Text style={[Fonts.bold, {color: Colors.black, marginLeft: 2, fontSize: 40}]}>
          {label}
        </Text>
      </View>
      <Image
        source={image}
        style={{
          height: 120,
          width: 120,
          position: 'absolute',
          left: -60
        }}
      /> 
    </View>}
    {children}
  </View>
);
}

export default OrdersStatisticsCard