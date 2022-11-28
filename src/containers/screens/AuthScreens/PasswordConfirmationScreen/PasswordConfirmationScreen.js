import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts, ApplicationStyles} from '../../../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, View} from 'react-native';
import {styles} from '../styles';

import {Headline, Caption} from 'react-native-paper';
import {
  AuthHeader,
  FullwidthButton,
  InputField,
} from '../../../../components/common';
import Strings from '../../../../constants/strings';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const PasswordConfirmationScreen = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader navigation={navigation} />
      <View style={styles.centered}>
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

        <Headline style={[Fonts.h4, Fonts.weight1]}>
          {Strings.passwordHeading}
        </Headline>
        <Caption style={[Fonts.small, Fonts.weight2]}>
          {Strings.passwordSubHeading}
        </Caption>
      </View>

      <View style={ApplicationStyles.p20}>
        <InputField leftIcon={'key-variant'} placeholder={Strings.password} />
        <InputField
          leftIcon={'key-variant'}
          placeholder={Strings.confirmPassword}
          secureTextEntry
        />
      </View>

      <FullwidthButton
        label={Strings.signup}
        onPress={() => navigation.replace('BottomStack')}
      />
    </SafeAreaView>
  );
};

PasswordConfirmationScreen.propTypes = propTypes;
PasswordConfirmationScreen.defaultProps = defaultProps;

export default PasswordConfirmationScreen;
