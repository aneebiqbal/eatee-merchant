import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: HP('2'),
    paddingHorizontal: 15,
    marginHorizontal: 2,
    marginVertical: 10,
    backgroundColor: Colors.lightGray,
  },

  categoryHeading: {
    color: Colors.primary,
  },
  itemText: {
    color: Colors.secGrayDark,
    padding: 5,
  },
});
