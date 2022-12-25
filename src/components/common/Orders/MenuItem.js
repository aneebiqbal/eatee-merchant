
import React from 'react';
import {Text, View, Image} from 'react-native';
import { Divider } from 'react-native-elements';
import {Colors, Fonts, Images} from '../../../theme';

const propTypes = {};

const defaultProps = {};

const MenuItem = ({
  //TODO
}) => {
  return (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={Images.burger} style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            marginRight: 28
          }}/>
          <View
            style={{ flexDirection: 'column' }}
          >
            <Text style={[Fonts.bold]}>Beef Burger</Text>
            <Text>Lorem ipsum dolor sit amet, consecte</Text>
          </View>
        </View>
        <Text style={[Fonts.bold, { color: Colors.primary }]}>£ 12</Text>
      </View>
      <Divider/>
    </>
  )
}

export default MenuItem