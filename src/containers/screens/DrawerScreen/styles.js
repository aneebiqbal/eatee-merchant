import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.drawerBody,
  },
  profilePic: {
    height: 80,
    width: 80,
    marginLeft: WP('10'),
    borderRadius: 30,
  },
  close: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginLeft: WP('10'),
    marginBottom: 40,
  },
  name: {
    marginTop: HP('2'),
    marginHorizontal: WP('10'),
    color: Colors.primaryGrayMid,
    fontWeight: 'bold',
  },
  email: {
    marginHorizontal: WP('5'),
    fontWeight: '300',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: WP('10'),
    paddingVertical: WP('3'),
  },
  title: {
    flex: 1,
    marginStart: WP('3'),
    color: Colors.primaryGrayDark,
  },
  mv10: {
    marginVertical: HP('2'),
  },
  flex_end: {
    justifyContent: 'flex-end',
  },
  logoutBtnStyle: {
    width: WP('15'),
    position: 'absolute',
    bottom: HP('10'),
    marginLeft: WP('10'),
    borderRadius: 30,
    marginHorizontal: 20,
    zIndex: 10,
  },
  marginTop: {
    marginTop: HP('5'),
  },
});
