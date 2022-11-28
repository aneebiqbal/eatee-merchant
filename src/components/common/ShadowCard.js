import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {ApplicationStyles, Colors, Fonts} from '../../theme';
import {HP} from '../../utils';

const propTypes = {};

const defaultProps = {};

const ShadowCard = ({heading, sub}) => {
  return (
    <View style={[styles.container, ApplicationStyles.shadow]}>
      <View style={styles.innerContainer}>
        <View style={ApplicationStyles.row_space_between}>
          <Icon
            name={'clock'}
            type={'feather'}
            color={Colors.primary}
            size={HP('3')}
          />
          <Text style={[Fonts.medium, {color: Colors.black, marginLeft: 2}]}>
            {heading}
          </Text>
        </View>
        <View>
          <Text style={[Fonts.medium, Fonts.light]}>{sub}</Text>
        </View>
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
