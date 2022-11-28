import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {height, highResolutionHeight, width} from '../../../theme/Metrics';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  horizontalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: WP('5'),
    marginVertical: HP('1'),
    paddingHorizontal: WP('2'),
    height: height > highResolutionHeight ? HP('10') : HP('12'),
    width: WP('33'),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: Colors.secGrayDark,
    textAlign: 'center',
  },
  info: {
    color: Colors.primary,
  },
});
