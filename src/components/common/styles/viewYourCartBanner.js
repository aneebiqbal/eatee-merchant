import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: HP('3'),
    paddingHorizontal: WP('5'),
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Colors.primary,
  },

  textColor: {
    color: Colors.white,
  },
});
