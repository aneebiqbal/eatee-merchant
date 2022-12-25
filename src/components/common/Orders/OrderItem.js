import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Fonts, Images} from '../../../theme';
import ShadowCard from '../ShadowCard';
import { CaptionedText } from '../CaptionedText';
import Tag from '../Tag';

const propTypes = {};

const defaultProps = {};

const OrderItem = ({
  //TODO
  onPress
}) => {
  return (
    <ShadowCard style={{margin: 20, paddingHorizontal: 28}}>
      <View style={{
        paddingVertical: 24,
        borderBottomColor: Colors.blackCoral,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGra,
      }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{ paddingRight: 10}}>
            ORDER ID #<Text style={[, Fonts.bold]}>68767676867</Text>
          </Text>
          <Tag text='Ready' type={'success'}/>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text>Create date & time:</Text><Text>27-09-2021, 03:12 PM</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 28,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <View style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View style={{
            flexDirection: 'row',
          }}>
            <Image 
              source={Images.man} 
              style={{
                width: 36,
                height: 36,
                marginRight: 16,
                borderRadius: 50
              }}
            />
            <CaptionedText heading='Soleh Anderson' text='VIEW PROFILE' />
          </View>
          <CaptionedText heading='13 mins' text='Remaining Time' headingIcon={'clock'}/>
          <CaptionedText heading='Pickup' text='Service' />
          <CaptionedText heading='Cash' text='Payment' />
          <CaptionedText heading='£ 36.00' text='Total' />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Icon name='dots-horizontal' type='material-community' color={Colors.primary} size={28} />
        </TouchableOpacity>
      </View>
    </ShadowCard>
  )
}

export default OrderItem