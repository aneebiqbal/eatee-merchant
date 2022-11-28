import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP} from '../../../utils';

export const styles = StyleSheet.create({
  addressTypesContainer: {
    flexDirection: 'row',
    marginVertical: HP('3'),
    justifyContent: 'space-between',
  },
  addressTypesBtns: {
    backgroundColor: Colors.lightGray,
    paddingHorizontal: HP('3'),
    paddingVertical: HP('1'),
    borderRadius: 10,
  },
  addressTypesText: {
    color: Colors.white,
  },
});
