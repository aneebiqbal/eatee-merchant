import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import DrawerHeader from './DrawerHeader';
import DrawerItem from './DrawerItem';
import {styles} from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import {ButtonIconOrText} from '../../../components/common';
import {height} from '../../../theme/Metrics';
import {useDispatch} from 'react-redux';
import {logout} from '../../../actions/AccountActions';
import strings from '../../../constants/strings';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonIconOrText from '../../../components/common/ButtonIconOrText';
const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const defaultProps = {};

const DrawerScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader navigation={navigation} />
      {/* <View style={styles.marginTop}>
        <DrawerItem
          title={strings.favourite}
          Icon={<EvilIcons name="heart" size={30} />}
          onPress={() => {
            navigation.closeDrawer();
            // navigation.replace('HomeScreen');
          }}
        />
      </View> */}

      <ButtonIconOrText
        label={strings.logOut}
        onPress={() => {
          dispatch(logout());
          navigation.closeDrawer();
        }}
        style={styles.logoutBtnStyle}
      />
    </SafeAreaView>
  );
};

DrawerScreen.propTypes = propTypes;
DrawerScreen.defaultProps = defaultProps;
export default DrawerScreen;