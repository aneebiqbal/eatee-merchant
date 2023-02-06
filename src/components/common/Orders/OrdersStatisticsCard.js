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
      <View style={styles.textMainStyle}>
        <Text style={[Fonts.extraSmall, styles.headingTextStyle]}>
          {heading}
        </Text>
        <Text style={[Fonts.bold, styles.labelTextStyle]}>
          {label}
        </Text>
      </View>
      <Image
        source={image}
        style={styles.imgStyle}
      /> 
    </View>}
    {children}
  </View>
);
}

export default OrdersStatisticsCard