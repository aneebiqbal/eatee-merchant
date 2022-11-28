import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {Fonts} from '../../../theme';

const propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    src: PropTypes.number.isRequired,
  }).isRequired,
  onPress: PropTypes.func,
};

const defaultProps = {
  onPress: () => {},
};

const DrawerItem = ({title, Icon, onPress, reduced}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.mv10}>
        <View style={styles.itemRow}>
          {Icon}
          <Text style={[styles.title, Fonts.small]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

DrawerItem.propTypes = propTypes;

DrawerItem.defaultProps = defaultProps;

export default DrawerItem;
