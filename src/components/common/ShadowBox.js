import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ApplicationStyles} from '../../theme';
import {styles} from './styles/orderCard';

export const ShadowBox = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      ApplicationStyles.row_space_between,
      styles.container,
      ApplicationStyles.shadow,
    ]}>
    {children}
  </TouchableOpacity>
);
