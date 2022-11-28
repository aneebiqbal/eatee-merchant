import React from 'react';
import {View, Image, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import strings from '../../../constants/strings';
import {ApplicationStyles, Fonts} from '../../../theme';
import {styles} from './styles';

const propTypes = {};

const defaultProps = {};

const DrawerHeader = ({navigation}) => {
  const {user} = useSelector(({AccountState}) => AccountState);
  return (
    <SafeAreaView>
      <View style={[ApplicationStyles.containerStyle, styles.flex_end]}>
        <IconButton
          icon="close"
          style={styles.close}
          onPress={() => navigation.closeDrawer()}
        />
        <Image
          source={
            user.imageUrl !== null &&
            user.imageUrl !== undefined &&
            user.imageUrl !== ''
              ? {uri: user.imageUrl}
              : require('../../../assets/images/person.jpg')
          }
          style={styles.profilePic}
        />
        <Text style={[styles.name, Fonts.small]}>{user?.fullName}</Text>
        <Text style={[styles.email, Fonts.small]}>{user?.userName}</Text>
      </View>
    </SafeAreaView>
  );
};

DrawerHeader.propTypes = propTypes;

DrawerHeader.defaultProps = defaultProps;

export default DrawerHeader;
