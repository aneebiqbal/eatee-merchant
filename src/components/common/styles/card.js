import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {width} from '../../../theme/Metrics';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  horizontalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: WP('5'),
    marginVertical: HP('1'),
    paddingHorizontal: WP('5'),
    height: HP('20'),
    width: width - 40,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    width: '50%',
    borderRadius: 30,
    alignItems: 'center',
  },
  horizontalImageContainer: {
    width: WP('30'),
    height: HP('15'),
    borderRadius: 25,
    overflow: 'hidden',
  },
  verticalImageContainer: {
    marginTop: HP('2'),
    width: WP('40'),
    height: HP('18'),
    borderRadius: 30,
    overflow: 'hidden',
  },
  imageHorizontal: {
    width: WP('40'),
    height: '100%',
  },
  imageVertical: {
    width: WP('40'),
    height: '100%',
  },
  dataHorizontalContainer: {flex: 1, marginLeft: WP('2')},
  dataVerticalContainer: {
    marginLeft: 10,
    width: '100%',
    marginBottom: HP('2'),
    marginTop: 5,
  },
  favIconHorizontal: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favIconVertical: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  locationRatingContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  categoriesText: {
    flexWrap: 'wrap',
    flex: 1,
  },
  marginTop10: {
    marginTop: 10,
  },
});
