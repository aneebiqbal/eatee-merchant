import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {ApplicationStyles, Colors, Fonts, Images} from '../../theme';
import {HP} from '../../utils';

const propTypes = {};

const defaultProps = {};

const ShadowCard = ({heading, image, style}) => {
  return (
    <View style={[styles.container, ApplicationStyles.shadow, style]}>
      <View style={styles.innerContainer}>
        <Image
          source={image}
          style={{
            height: 35,
            width: 35,
            marginBottom: 20
          }}
        />
        <Text style={[Fonts.medium, {color: Colors.black, marginLeft: 2}]}>
          {heading}
        </Text>      
      </View>
    </View>
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
});

ShadowCard.propTypes = propTypes;

ShadowCard.defaultProps = defaultProps;

export default ShadowCard;
