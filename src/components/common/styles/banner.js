import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {width} from '../../../theme/Metrics';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    height: 140,
    width: width - 80,
    marginLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'space-between',
    marginLeft: 10,
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    borderColor: 'yellow',
    borderWidth: 0,
  },
  bannerBtn: {
    width: 150,
  },
  bannerBtnText: {
    marginLeft: 5,
    color: Colors.white,
  },
  bannerImg: {
    height: 100,
    width: 150,
  },
});
