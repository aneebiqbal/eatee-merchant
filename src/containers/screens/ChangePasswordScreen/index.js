import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {
  FullwidthButton,
  Header,
  InputField,
  Spinner,
  Popup,
} from '../../../components/common';
import {ApplicationStyles, Colors, Fonts, Images} from '../../../theme';
import {Caption, Headline} from 'react-native-paper';
import {WP} from '../../../utils';
import {Formik} from 'formik';
import Status from '../../../constants/status';
import {changePasswordValidation} from './Validation';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../../actions';
import strings from '../../../constants/strings';
import { SafeAreaView } from 'react-native-safe-area-context';
const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const ChangePasswordScreen = ({navigation}) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const {statusChangePassword} = useSelector(
    ({ChangePasswordState}) => ChangePasswordState,
  );
  const {status, user} = useSelector(({AccountState}) => AccountState);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header left title={strings.changePassword} navigation={navigation} />
        <View style={styles.centered}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Headline style={[Fonts.h4, Fonts.weight1]}>{strings.changePassword}</Headline>
          <Caption style={[Fonts.small, Fonts.weight2]}>
            {strings.changePasswordText}
          </Caption>
        </View>
        <Formik
          validationSchema={changePasswordValidation}
          validateOnChange={false}
          initialValues={{
            oldpassword: '',
            newpassword: '',
            confirmpassword: '',
          }}
          onSubmit={values => {
            setError('');
            dispatch(
              changePassword(
                {
                  oldpassword: values.oldpassword,
                  newpassword: values.newpassword,
                  confirmpassword: values.confirmpassword,
                },
                user.accessToken,
                setError,
                setOpenPopup,
              ),
            );
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={ApplicationStyles.p20}>
                <InputField
                  leftIcon={'key-variant'}
                  placeholder={strings.oldPassword}
                  text={values.oldpassword}
                  secureTextEntry
                  setText={handleChange('oldpassword')}
                  error={errors.oldpassword && errors.oldpassword}
                />
                <InputField
                  leftIcon={'key-variant'}
                  placeholder={strings.newPassword}
                  text={values.newpassword}
                  secureTextEntry
                  setText={handleChange('newpassword')}
                  error={errors.newpassword && errors.newpassword}
                />
                <InputField
                  leftIcon={'key-variant'}
                  placeholder={strings.confirmPassword}
                  text={values.confirmpassword}
                  secureTextEntry
                  setText={handleChange('confirmpassword')}
                  error={errors.confirmpassword && errors.confirmpassword}
                />
                <View style={{paddingHorizontal: 0}}>
                  <Text style={styles.errorStyle}>{error}</Text>
                </View>
                <View style={[{marginBottom: WP('5')}]}>
                  <FullwidthButton
                    label={strings.changePassword}
                    onPress={handleSubmit}
                    loading={statusChangePassword === Status.LOADING}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
      <Popup
        visible={openPopup}
        onBackPress={() =>
          navigation.replace('BottomStack', {
            screen: 'HomeStack',
          })
        }>
        <>
          {/* <Image
            source={Images.logo}
            resizeMode={'contain'}
            style={{width: '80%', height: '80%'}}
            width={200}
            height={200}
            marginBottom={30}
          /> */}
          <View style={{alignItems: 'center'}}>
            <Text style={[Fonts.bold, Fonts.h6]}>{strings.changePasswordCardText1}</Text>
            <Text style={[Fonts.bold, Fonts.h6, {color: Colors.green}]}>
              {strings.changePasswordCardText2}
            </Text>
          </View>
        </>
      </Popup>
    </SafeAreaView>
  );
};

ChangePasswordScreen.propTypes = propTypes;
ChangePasswordScreen.defaultProps = defaultProps;

export default ChangePasswordScreen;
