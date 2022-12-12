import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    margin: 20,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorStyle: {
    color: Colors.primary,
    textAlign: 'center',
  },
  
});
