import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts, ApplicationStyles, Colors} from '../../../../theme';
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
import { height } from '../../../../theme/Metrics';


const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const ResetPasswordScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [passwordConfirmationSent, setPasswordConfirmationSent] = useState(false)
  const {status, user} = useSelector(({AccountState}) => AccountState);
 
  const handleSubmitEvent = values => {  
    //todo dispatch action
    setPasswordConfirmationSent(true)  
  };  

  if(passwordConfirmationSent) {
    return (
      <View style={styles.container}>
      <BackButton
          style={styles.backButton}
          onBack={() => navigation.pop(2)}
      />
      <ImageBackground source={Images.login} resizeMode="cover" style={styles.backgroundImage}>
        <PasswordConfrmation 
          heading={strings.emailSent}
          image={Images.emailIcon}
          text={strings.passwordResetEmail}
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
      <View style={styles.ResetPasswordTextContainer}>
          <BackButton/>
          <View style={{ marginTop: height/4}}>
            <Text style={[Fonts.h4, Fonts.weight1]}>
              {strings.forgot}
            </Text>
            <Text style={[Fonts.small, Fonts.weight4, styles.createPasswordTextMargin]}>
            {strings.reset}
            </Text>
          

          <Formik
            //validationSchema={signInValidation}
            //validateOnChange={false}
            initialValues={{email: ''}}
            onSubmit={values => {
              handleSubmitEvent(values);
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <>
                <View style={styles.inputFieldContainer}>
                  <InputField
                    leftIcon={'email'}
                    placeholder={Strings.emailPlaceholder}
                    text={values.username}
                    setText={handleChange('username')}
                    error={errors.username && errors.username}
                  />
                </View>
                <View style={styles.errorStyleContainer}>
                  <Text style={styles.errorStyle}>{error}</Text>
                </View>
                  <FullwidthButton
                    labelStyle
                    notApplyMargin
                    label={Strings.send}
                    onPress={handleSubmit}
                    loading={status === Status.LOADING}
                  />
              </>
            )}
          </Formik>
        </View>
        </View>
      {/* </ScrollView> */}
    </View>
  )
};

ResetPasswordScreen.propTypes = propTypes;
ResetPasswordScreen.defaultProps = defaultProps;

export default ResetPasswordScreen;
