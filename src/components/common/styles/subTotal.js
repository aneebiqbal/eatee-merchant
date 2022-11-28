import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {},
  subTotalHeadingContainer: {
    flexDirection: 'row',
    marginBottom: HP('1'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subTotalIcon: {
    borderWidth: 3,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: Colors.secYellowMid,
    padding: 10,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: Colors.secGrayLight,
    borderRadius: 10,
    padding: 10,
  },
  singleDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  itemTextColor: {
    color: Colors.secGrayDark,
  },
  price: {
    color: Colors.primary,
  },
  grandTotalContainer: {
    borderWidth: 1,
    borderColor: Colors.secGrayLight,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
