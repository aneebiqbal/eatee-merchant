import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {height, highResolutionHeight, width} from '../../../theme/Metrics';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: WP('5'),
    marginVertical: HP('1'),
    // height: HP('20'),
    paddingVertical: HP('2'),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'red',
  },
  innerContainer: {
    flex: 3,
    paddingRight: 10,
  },
  horizontalImageContainer: {
    width: WP('10'),
    height: height > highResolutionHeight ? HP('13') : HP('15'),
    borderRadius: 25,
    overflow: 'hidden',
  },
  imageHorizontal: {
    width: WP('40'),
    height: '100%',
  },
  pricing: {
    color: Colors.primary,
    marginTop: 10,
  },
});
