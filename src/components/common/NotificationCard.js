import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import strings from '../../constants/strings';
import {Colors, Fonts} from '../../theme';
import {HP, WP} from '../../utils';
import {ItemRow} from './ItemRow';
const propTypes = {};

const defaultProps = {};
export const NotificationCard = ({notification}) => {
   notification = notification.result; 
  return (
    <ItemRow
      left={
        <View style={{paddingLeft: 20,}}>
          <Icon
            name={'bell'}
            type={'material-community'}
            color={Colors.primary}
            size={HP('3')}
          />
        </View>
      }
      right={
        <>
          {/* <Text numberOfLines={3} style={{marginBottom: 5}}>
              {notification?.text}
          </Text>
          <Text>{strings.totalOrderAmount} {notification.order.totalAmount}</Text>
          <Text style={[Fonts.bold, {color: Colors.primary, marginTop: 20}]}>
            {notification?.order.createdOnText} 
          </Text> */}
          <Text numberOfLines={3} style={{width: WP(70)}}>
              {notification?.text}
          </Text>
          <Text style={[Fonts.bold, {color: Colors.primary, marginTop: 20}]}>
            {notification?.order.createdOnText} 
          </Text> 
        </>
      }
    />
  );
};
NotificationCard.propTypes = propTypes;

NotificationCard.defaultProps = defaultProps;