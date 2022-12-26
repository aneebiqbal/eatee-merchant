import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {ApplicationStyles, Colors, Fonts, Images} from '../../theme';
import {HP} from '../../utils';

const propTypes = {};

const defaultProps = {};

const ShadowCard = ({heading, image, style, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, ApplicationStyles.shadow, style]}>
      {image && <View style={styles.innerContainer}>
        <Image
          source={image}
          style={styles.imgStyle}
        />
        <Text style={[Fonts.medium, styles.textStyle]}>
          {heading}
        </Text>      
      </View>}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 35,
    width: 35,
    marginBottom: 20
  },
  textStyle: {
    color: Colors.black,
    marginLeft: 2
  },
});

ShadowCard.propTypes = propTypes;

ShadowCard.defaultProps = defaultProps;

export default ShadowCard;
