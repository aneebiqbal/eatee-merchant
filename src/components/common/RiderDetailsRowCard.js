import { View, Text, Image } from 'react-native'
import React from 'react'
import { Fonts, Images } from '../../theme'
import { CaptionedText } from './CaptionedText'
import ButtonIconOrText from './ButtonIconOrText'
import strings from '../../constants/strings'

const RiderDetailsRowCard = () => {
  return (
    <View style={{backgroundColor:'#0A0B0C', flexDirection: 'row', borderRadius: 8, padding: 16, justifyContent: 'space-between'}}>
      <View style={{justifyContent:'center', flexDirection: 'row',}}>
        <Image
          source={Images.man3}
          style={{
            height: 90,
            width: 90,
          }}
        />
        <View style={{flexDirection:'column', justifyContent: 'center', marginLeft: 16}}>
          <Text style={[{marginBottom: 16, color: 'white'}, Fonts.extraSmall]}>Delivery Guy</Text>
          <CaptionedText heading='Aneeb Iqbal' text='ID#566778' headingStyle={[{color: 'white'}, Fonts.medium]} textStyle={[{color: 'white'}, Fonts.extraSmall]}/>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <ButtonIconOrText
          label={'+51 5125 626 77'}
          iconName='call'
          iconType='material'
          iconSize={30}
          onPress={() => {
            dispatch(logout());
            navigation.closeDrawer();
          }}
          style={{ height: 58, marginRight: 16 }}
        />
        <ButtonIconOrText
          label={(<View style={{ flexDirection: 'column'}}><Text style={{ color: 'white'}}>Delivery Time</Text><Text style={{ color: 'white'}}>12:52 AM</Text></View>)}
          iconName='truck-fast'
          iconType='material-community'
          iconSize={30}
          onPress={() => {
            dispatch(logout());
            navigation.closeDrawer();
          }}
          style={{height: 58, backgroundColor: '#FFC018'}}
        />
      </View>
    </View>
    
  )
}

export default RiderDetailsRowCard