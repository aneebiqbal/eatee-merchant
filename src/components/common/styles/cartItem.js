import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {height, highResolutionHeight, width} from '../../../theme/Metrics';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  horizontalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: WP('5'),
    marginVertical: HP('1'),
    paddingHorizontal: WP('4'),
    height: height > highResolutionHeight ? HP('12') : HP('14'),
    width: width - 40,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalImageContainer: {
    width: WP('15'),
    height: height > highResolutionHeight ? HP('7') : HP('9'),
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageHorizontal: {
    width: WP('40'),
    height: '100%',
  },
  dataHorizontalContainer: {flex: 1, marginLeft: WP('2')},
  categoriesContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  categoriesText: {
    flexWrap: 'wrap',
    flex: 1,
  },

  pricing: {
    color: Colors.primary,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  counterContainer: {flex: 1},
  counterStyle: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    minWidth: 5,
    minHeight: 5,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
