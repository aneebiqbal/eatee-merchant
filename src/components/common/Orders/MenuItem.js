
import React from 'react';
import {Text, View, Image} from 'react-native';
import { Divider } from 'react-native-elements';
import {Colors, Fonts, Images} from '../../../theme';

const propTypes = {};

const defaultProps = {};

const MenuItem = ({
  //TODO
  item,
  key
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
            <Text style={[Fonts.bold]}>{item?.name}</Text>
            <Text>Lorem ipsum dolor sit amet, consecte</Text>
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', paddingVertical: 10,}}> */}
            {
            item.addons.map((addon, index)=> {
              return (
                <>
                <View key={index} style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text style={[Fonts.bold]}>{addon?.name}</Text>
                  <Text style={[Fonts.bold, { color: Colors.primary}]}> ${addon?.price}</Text> 
                </View>
               
                </>
              )
            })
          }       
            {/* </View> */}

          </View>
        </View>
        <View style={{flexDirection:"column", alignItems:"center", }}>  
         <Text style={[Fonts.bold, { color: Colors.primary, marginBottom: 20 }]}>${item?.price}</Text>
        </View>
      </View>     
      <Divider/>
    </>
  )
}

export default MenuItem