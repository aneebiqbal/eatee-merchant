import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts, ApplicationStyles} from '../../../../theme';
import {Image, View, Text, ScrollView} from 'react-native';

import {
  FullwidthButton,
  InputField,
} from '../../../../components/common';

import Strings from '../../../../constants/strings';
import {styles} from '../styles';
import {signIn} from '../../../../actions/AccountActions';
import {useDispatch, useSelector} from 'react-redux';
import {WP} from '../../../../utils';
import Status from '../../../../constants/status';
import { Formik } from 'formik';
import {signInValidation} from './Validation';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../../../constants/strings';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};



const defaultProps = {};

const SigninScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const {status, user} = useSelector(({AccountState}) => AccountState);
 
  const handleSubmitEvent = values => {  
    setError('');
    dispatch(
      signIn(
        {
          username: values.username,
          password: values.password,
        },
        setError,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.centered}>
          <Image 
            source={Images.logo} 
            style={styles.logo} 
            resizeMode="contain"
          />

          <Text style={[Fonts.h4, Fonts.weight1]}>
            {strings.start}
          </Text>
          <Text style={[Fonts.small, Fonts.weight2]}>
            {strings.loginText}
          </Text>
        </View>

        <Formik
          validationSchema={signInValidation}
          validateOnChange={false}
          initialValues={{username: '', password: ''}}
          onSubmit={values => {
            handleSubmitEvent(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={ApplicationStyles.p20}>
                <InputField
                  leftIcon={'email'}
                  placeholder={Strings.emailPlaceholder}
                  text={values.username}
                  setText={handleChange('username')}
                  error={errors.username && errors.username}
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
              <View style={{paddingHorizontal: 0}}>
                <Text style={styles.errorStyle}>{error}</Text>
              </View>
              <View style={[{marginBottom: WP('5')}]}>
                <FullwidthButton
                  label={Strings.login}
                  onPress={handleSubmit}
                  loading={status === Status.LOADING}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
};

SigninScreen.propTypes = propTypes;
SigninScreen.defaultProps = defaultProps;

export default SigninScreen;
