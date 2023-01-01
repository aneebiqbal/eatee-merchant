import * as React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationStyles} from '../theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../containers/screens/DrawerScreen/DrawerScreen';
import SigninScreen from '../containers/screens/AuthScreens/SigninScreen/SigninScreen';
import PasswordConfirmationScreen from '../containers/screens/AuthScreens/PasswordConfirmationScreen/PasswordConfirmationScreen';
import ResetPasswordScreen from '../containers/screens/AuthScreens/ResetPasswordScreens/ResetPasswordScreen';
import HomeScreen from '../containers/screens/HomeScreen';
import OrdersScreen from '../containers/screens/OrdersScreen';
import InventoryScreen from '../containers/screens/InventoryScreen';
import HistoryScreen from '../containers/screens/HistoryScreen';
import MyAccountScreen from '../containers/screens/MyAccountScreen';
import SettingsScreen from '../containers/screens/SettingsScreen';
import BottomStack from './BottomStack';


import {connect} from 'react-redux';
import OrderStatisticsScreen from '../containers/screens/OrdersScreen/OrderStatisticsScreen';
import OrderHistoryScreen from '../containers/screens/OrdersScreen/OrderDetailsScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomStack"
      headerMode={'screen'}
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrdersStatisticsScreen"
        component={OrderStatisticsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InventoryScreen"
        component={InventoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SigninScreen"
      headerMode={'screen'}
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordConfirmationScreen"
        component={PasswordConfirmationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />}>
    <Drawer.Screen
      name="drawer"
      component={AppStack}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

const AppNav = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: false,
      }}>
      <Stack.Screen name="modal" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigator = ({loggedIn}) => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={ApplicationStyles.appbar.barStyle}
        backgroundColor={ApplicationStyles.appbar.statusBarColor}
      />
      <NavigationContainer>
        {loggedIn ? <AppNav /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = ({AccountState}) => {
  return {
    loggedIn: AccountState.loggedIn,
  };
};

export default connect(mapStateToProps, null)(RootNavigator);
