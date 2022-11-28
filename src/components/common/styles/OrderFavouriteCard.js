import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {height, highResolutionHeight, width} from '../../../theme/Metrics';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: WP('5'),
    marginVertical: HP('2'),
    paddingHorizontal: WP('5'),
    padding: 20,
    width: width - 40,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favIconVertical: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: -10,
    right: -5,
  },
  favIconHorizontal: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
