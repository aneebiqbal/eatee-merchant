import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
