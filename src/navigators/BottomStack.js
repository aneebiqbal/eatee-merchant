import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import OrdersScreen from '../containers/screens/OrdersScreen';


import {ApplicationStyles, Colors, Images} from '../theme';
import {createStackNavigator} from '@react-navigation/stack';
import InventoryScreen from '../containers/screens/InventoryScreen';
import HistoryScreen from '../containers/screens/HistoryScreen';
import SettingsScreen from '../containers/screens/SettingsScreen';
import MyAccountScreen from '../containers/screens/MyAccountScreen';
import HomeScreen from '../containers/screens/HomeScreen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const _BottomStack = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = (navigation) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" headerMode={'screen'}>
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomStack = ({props, navigation} )=> {
  return (
    <_BottomStack.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: () => {
          return null;
        },
        tabBarActiveTintColor: Colors.primary,
        inactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: Colors.lightGray},

        tabBarIcon: ({focused, color, size}) => {
          // You can return any component that you like here!
          if (route.name === 'HomeStack') {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('OrdersScreen')} style={[styles.container]}>
              <View style={styles.innerContainer}>
                <Image
                  source={focused ? Images.orders : Images.ordersUnselected}
                  style={styles.imgStyle}
                  color={color}
                  size={size}
                />
                <Text>Order</Text>
              </View>
            </TouchableOpacity>
      )}
          if (route.name === 'InventoryScreen') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('InventoryScreen')} style={[styles.container]}>
                <View style={styles.innerContainer}>
                  <Image
                    source={focused ? Images.inventory : Images.inventoryUnselected}
                    style={styles.imgStyle}
                    color={color}
                    size={size}

                  />
              </View>
            </TouchableOpacity>
            );
          }
          if (route.name === 'HistoryScreen') {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')} style={[styles.container]}>
              <View style={styles.innerContainer}>
                  <Image
                  source={focused ? Images.history : Images.historyUnselected}
                  style={styles.imgStyle}
                  color={color}
                  size={size}

                  />
              </View>
            </TouchableOpacity>)
          }
          if (route.name === 'SettingsScreen') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={[styles.container]}>
                <View style={styles.innerContainer}>
                    <Image
                      source={focused ? Images.settings : Images.settingsUnselected}
                      style={styles.imgStyle}
                      color={color}
                      size={size}
                    />
                </View>
              </TouchableOpacity>)
          }
          if (route.name === 'MyAccountScreen') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('MyAccountScreen')} style={[styles.container]}>
                <View style={styles.innerContainer}>
                    <Image
                    source={focused ? Images.accounts : Images.accountsUnselected}
                    style={styles.imgStyle}
                    color={color}
                    size={size}
                    />
                </View>
              </TouchableOpacity>)
          }
        },
        unmountOnBlur: true,
      })}>
      <_BottomStack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            props.navigation.replace('BottomStack', {
              screen: 'HomeStack',
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="InventoryScreen"
        component={InventoryScreen}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            props.navigation.navigate('BottomStack', {
              screen: 'InventoryScreen',
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            props.navigation.navigate('BottomStack', {
              screen: 'HistoryScreen',
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            props.navigation.navigate('BottomStack', {
              screen: 'SettingsScreen',
            });
          },
        }}
      />
      <_BottomStack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            props.navigation.navigate('BottomStack', {
              screen: 'MyAccountScreen',
            });
          },
        }}
      />
    </_BottomStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop:10
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 30,
    width: 30,
    marginBottom: 20
  },
  textStyle: {
    color: Colors.black,
    marginLeft: 2
  },
});

export default BottomStack;
