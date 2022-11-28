import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors, Fonts} from '../../theme';
import {HP} from '../../utils/responsive';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavouriteButton} from '.';
import {Divider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const propTypes = {};

const defaultProps = {};

const Header = props => {
  // console.log('data props -- ', props);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {
    user: {accessToken},
  } = useSelector(({AccountState}) => AccountState);
  const {totalItems} = useSelector(({CartState}) => CartState);
  const dispatch = useDispatch();

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.leftIcon]}>
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
        <View style={[styles.ml20]}>
          {props.location ? (
            <TouchableOpacity onPress={props.onOpen}>
              <Text style={[styles.locHeading]}>
                {props.selectedLocation?.label}
              </Text>
              <Text style={styles.location}>
                {props.selectedLocation?.addressLine1}
              </Text>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.titleStyle]}>{props.title}</Text>
          )}
        </View>
        <View style={styles.rightIcon}>
          <View>
            {props.isFav ? (
              <View style={styles.mr10}>
                <FavouriteButton
                  onPress={() => setFavouriteRestaurant()}
                  fav={props.fav}
                  loading={loading}
                  withoutBackground
                />
              </View>
            ) : null}
          </View>
          <View>
            {props.cart ? (
              <View style={styles.mr20}>
                <Ionicons
                  name="cart-outline"
                  color={props.withoutBackground ? 'white' : 'black'}
                  size={28}
                  onPress={() =>
                    totalItems > 0 && navigation.navigate('ItemListingScreen')
                  }
                />
                <View style={styles.filledCart}>
                  <Text style={Fonts.white}>{totalItems}</Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </View>
      {props.divider && <Divider style={styles.dividerMargin} />}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: HP('8'),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
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
    // fontFamily: family.boldText,
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
    right: 0,
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
