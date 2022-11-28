import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Images, Colors, Fonts, ApplicationStyles} from '../../../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, View} from 'react-native';
import {styles} from '../styles';

import {Headline, Caption, IconButton} from 'react-native-paper';
import {InputField} from '../../../../components/common';
import Strings from '../../../../constants/strings';
import {WP} from '../../../../utils';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const ResetPasswordScreen = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

        <Headline style={[Fonts.h4, Fonts.weight1]}>{Strings.forgot}</Headline>
        <Caption style={[Fonts.small, Fonts.weight2]}>{Strings.reset}</Caption>
      </View>

      <View style={ApplicationStyles.p20}>
        <InputField leftIcon={'account'} placeholder={Strings.firstName} />
        <InputField leftIcon={'email'} placeholder={Strings.emailPlaceholder} />
      </View>

      <View style={[styles.centered, {marginBottom: WP('5')}]}>
        <IconButton
          icon="arrow-right"
          color={Colors.white}
          style={{backgroundColor: Colors.primary}}
          size={WP('12')}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

ResetPasswordScreen.propTypes = propTypes;
ResetPasswordScreen.defaultProps = defaultProps;

export default ResetPasswordScreen;
