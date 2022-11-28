import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components/common';
import strings from '../../../constants/strings';


const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{flex:2, marginBottom:50}}>Hello</Text>
    </SafeAreaView>
  );
};

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;