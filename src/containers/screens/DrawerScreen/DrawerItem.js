import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {Fonts, Images} from '../../../theme';
import { HP, WP } from '../../../utils';

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

const DrawerItem = ({title, onPress, reduced, image}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={{alignItems:'center', marginTop: 20}}>
        <View style={styles.itemRow}>
          <Text style={[styles.title, Fonts.small]}>{title}</Text>
        </View>
        <Image
          source={image}
          style={{
            height: HP('4'),
            width: WP('4'),
            marginRight:20
          }}
        />
      </TouchableOpacity>
    </>
  );
};

DrawerItem.propTypes = propTypes;

DrawerItem.defaultProps = defaultProps;

export default DrawerItem;
