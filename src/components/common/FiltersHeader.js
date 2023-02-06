import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images} from '../../theme';
import {HP} from '../../utils/responsive';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const propTypes = {};

const defaultProps = {};

const FiltersHeader = ({items}) => {
  return (
    <View style={[styles.container]}>
      {
        items.map((item, index) => (
          <TouchableOpacity onPress={item.onClick}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 16}}>
              <Image source={item.image} style={{height: 33, width: 33, marginBottom: 4}}/>
              <Text style={{color: 'white'}}>{item.title}</Text>
            </View>
          </TouchableOpacity>)
        )
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
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

FiltersHeader.propTypes = propTypes;

FiltersHeader.defaultProps = defaultProps;

export default FiltersHeader;
