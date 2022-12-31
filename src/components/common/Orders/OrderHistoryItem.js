import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Fonts, Images} from '../../../theme';
import ShadowCard from '../ShadowCard';
import { CaptionedText } from '../CaptionedText';
import Tag from '../Tag';

const propTypes = {};

const defaultProps = {};

const OrderHistoryItem = ({
  image,
  heading,
  text,
  quantity,
  onPress,
  cash,
  Payment,
  price,
  total,
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
            source={image} 
            style={{
              width: 36,
              height: 36,
              marginRight: 16,
            }}
          />
          <CaptionedText heading={heading} text={text} />
        </View>
        <CaptionedText heading={quantity} />
        <CaptionedText heading={cash} text={Payment} />
        <CaptionedText heading={price} text={total} />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Icon name='menu-right' type='material-community' color={Colors.primary} size={28} />
      </TouchableOpacity>
    </View>
  </ShadowCard>
  )
}

export default OrderHistoryItem

