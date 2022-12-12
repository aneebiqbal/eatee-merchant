import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts} from '../../../../theme';
import {Image, View, Text, ImageBackground} from 'react-native';

import {
  FullwidthButton,
  InputField,
  PasswordConfrmation,
} from '../../../../components/common';

import Strings from '../../../../constants/strings';
import {styles} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import Status from '../../../../constants/status';
import { Formik } from 'formik';
import strings from '../../../../constants/strings';
import BackButton from '../../../../components/common/BackButton';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const PasswordConfirmationScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const {status, user} = useSelector(({AccountState}) => AccountState);
  const [passwordChanged, setPasswordChanged] = useState(false)

 
  const handleSubmitEvent = values => {  
  //todo dispatch
    setPasswordChanged(true)  
  };


  if(passwordChanged) {
    return (
      <View style={styles.container}>
      <BackButton
          style={styles.backButton}
          onBack={() => navigation.pop(2)}
      />
      <ImageBackground source={Images.login} resizeMode="cover" style={styles.backgroundImage}>
        <PasswordConfrmation 
          heading={strings.passwordChanged}
          image={Images.passwordChange}
          text={strings.loginSuccess}
          button={(
            <FullwidthButton
              label={strings.login}
              labelStyle
              onPress={() => navigation.navigate('SigninScreen')}
              notApplyMargin
              style={styles.fullWidthButtonStyle}
            />
          )}
        />
      </ImageBackground>
    </View>
    ) 
  }

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.passwordConfermationContainer}>
      <View style={styles.imagePCViewStyle}>
        <Image
          source={Images.login}
          style={styles.imagePCStyle}
        />
      </View>

      {/* <ScrollView> */}
      <View style={styles.imagePCViewStyle}>
          <Text style={[Fonts.h4, Fonts.weight1]}>
          {strings.forgot}
          </Text>
          <Text style={[Fonts.small, Fonts.weight4, styles.createPasswordTextMargin]}>
            {strings.createPassword}
          </Text>
        

        <Formik
          // validationSchema={signInValidation}
          // validateOnChange={false}
          initialValues={{password: '', password: ''}}
          onSubmit={values => {
            handleSubmitEvent(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={styles.inputFieldContainer}>
                <InputField
                  leftIcon={'key-variant'}
                  placeholder={Strings.password}
                  text={values.password}
                  secureTextEntry
                  setText={handleChange('password')}
                  error={errors.password && errors.password}
                />
                <InputField
                  leftIcon={'key-variant'}
                  placeholder={Strings.password}
                  text={values.password}
                  secureTextEntry
                  setText={handleChange('password')}
                  error={errors.password && errors.password}
                />
              </View>
              <View style={styles.errorStyleContainer}>
                <Text style={styles.errorStyle}>{error}</Text>
              </View>

                <FullwidthButton
                  labelStyle
                  notApplyMargin
                  label={Strings.resetButton}
                  onPress={handleSubmit}
                  loading={status === Status.LOADING}
                />
            </>
          )}
        </Formik>
        
        </View>
      {/* </ScrollView> */}
    </View>
  )
};

PasswordConfirmationScreen.propTypes = propTypes;
PasswordConfirmationScreen.defaultProps = defaultProps;

export default PasswordConfirmationScreen;
