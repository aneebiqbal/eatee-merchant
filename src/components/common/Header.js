import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Colors, Fonts, Images} from '../../theme';
import {HP} from '../../utils/responsive';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const propTypes = {};

const defaultProps = {};

const Header = props => {
  // console.log('data props -- ', props);
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.leftIcon]}>
        {props.logo ? (
            <Image
              source={Images.logo}
              height={20}
              width={20}
            />)
            : null}


          {props.left ? (
            <BackIcon
              name="left"
              color={Colors.primary}
              size={28}
              onPress={() =>
                props.onBack ? props.onBack() : navigation.goBack()
              }
            />
          ) : props.drawerLeft ? (
            <Ionicons
              name="menu-outline"
              color={Colors.primary}
              size={28}
              onPress={props.onPressLeft}
            />
          ) : null}
        </View>
        {props.title && <Text>{props.title}</Text>}
        <View style={styles.rightIcon}>
          <View>
            {props.user ? (
              <View style={{flexDirection:'row',flex: 1, alignItems:'center'}}>
                <Text style={[Fonts.bold,{color: 'white', marginRight: 16}]}>Aneeb Iqbal</Text>
                <Image
                  source={Images.man}
                  style={{
                    height: 35,
                    width: 35,
                  }}
                />
              </View>
            ) : null}
            {props.right}
          </View>
        </View>
      </View>
      {props.divider && <Divider style={styles.dividerMargin} />}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#0A0B0C',
    height: HP('8'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  leftIcon: {
    alignItems: 'flex-end',
    paddingLeft: 15,
    flexDirection: 'row',
  },

  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  locHeading: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  location: {
    fontSize: 13,
    fontWeight: '300',
    paddingRight: 100,
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledCart: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    borderWidth: 0,
    height: 15,
    width: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ml20: {
    marginLeft: 20,
  },
  mr20: {
    marginRight: 20,
  },
  mr10: {
    marginRight: 10,
  },
  dividerMargin: {
    marginVertical: 10,
  },
});

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
