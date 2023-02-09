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
  onPress,
  order
}) => {
  console.log(order)
  return (
    <ShadowCard style={{margin: 10, paddingHorizontal: 28}}>
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
          ORDER ID #<Text style={[, Fonts.bold]}>{order.id}</Text>
        </Text>
        <Tag text= {order.orderStatus} type={'success'}/>
      </View>
      <View style={{ flexDirection: 'row'}}>
        <Text>Create date & time: </Text><Text>{order.createdOnText}</Text>
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
          {
            order?.items.map((item, index) => {
              return (
                <View style={{}}>
                  <CaptionedText key={index} heading={item.name} text={'4 more items'} />
                </View>
              )
            })
          }
        </View>
        {
          order?.items.map((item, index) => {
            return (
              <>
                <CaptionedText heading={item.quantity} key={index}/>
                <CaptionedText heading={order.paymentMethod ?? 'Cash'} text={'Payment'}/>
                <CaptionedText heading={item?.price} text={'total'}/>
              </>
            )
          })
        }
        
      </View>
      <TouchableOpacity onPress={onPress}>
        <Icon name='menu-right' type='material-community' color={Colors.primary} size={28} />
      </TouchableOpacity>
    </View>
  </ShadowCard>
  )
}

export default OrderHistoryItem

