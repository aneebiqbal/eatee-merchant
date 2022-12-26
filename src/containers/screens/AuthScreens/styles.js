import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    margin: 20,
  },
  errorStyle: {
    color: Colors.primary,
    textAlign: 'center',
  },
  forgotPassword: {
    color: Colors.primary,
    textAlign: 'right',
    paddingBottom: 16
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  backButton: {
    left: 20
  },
  createPasswordTextMargin: {
    marginTop: 10
  },
  fullWidthButtonStyle: {
    width: '80%',
    margin: 32
  },
  passwordConfermationContainer: {
    flexDirection:'row',
    flex: 1,
    alignItems:'center',
    marginRight:30
  },
  imagePCViewStyle: {
    flex: 0.5
  },
  imagePCStyle: {
    height: 1200,
    width: 350,
  },
  inputFieldContainer: {
    marginTop: 70
  },
  errorStyleContainer: {
    paddingHorizontal: 0
  },
  ResetPasswordTextContainer: {
    flex: 0.5,
    height: '100%',
    position: 'relative',
  }

});
