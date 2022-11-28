import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP} from '../../../utils';

export const styles = StyleSheet.create({
  margin: {
    marginHorizontal: 20,
  },
  categoryItem: {
    borderRadius: 10,
    paddingVertical: HP('1'),
    paddingHorizontal: 15,
    marginHorizontal: 2,
    marginVertical: 3,
  },
  selectedCategory: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    padding: 5,
  },
  selectedCategoryText: {
    color: Colors.white,
    padding: 5,
  },
  successButtonCategory: {
    borderRadius: 50,
    backgroundColor: Colors.green,
    // backgroundColor: '#2FB600',
    opacity: 0.5,
    borderRadius: 46,
  },
  unselectedCategory: {
    backgroundColor: Colors.lightGray,
  },
  unselectedCategoryText: {
    color: Colors.secGrayMid,
    padding: 5,
  },
  blackCompletedCategoryText: {
    color: Colors.black,
    padding: 5,
    fontWeight: 'bold',
  },
});
