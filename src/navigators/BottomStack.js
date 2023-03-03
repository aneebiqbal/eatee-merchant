import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import OrdersScreen from '../containers/screens/OrdersScreen';


import {ApplicationStyles, Colors, Fonts, Images} from '../theme';
import {createStackNavigator} from '@react-navigation/stack';
import InventoryScreen from '../containers/screens/InventoryScreen';
import HistoryScreen from '../containers/screens/HistoryScreen';
import SettingsScreen from '../containers/screens/SettingsScreen';
import MyAccountScreen from '../containers/screens/MyAccountScreen';
import HomeScreen from '../containers/screens/HomeScreen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { width } from '../theme/Metrics';
import NotificationScreen from '../containers/screens/NotificationScreen/NotificationScreen';

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
        tabBarStyle: {backgroundColor: Colors.lightGray, height: 80, backgroundColor:'white'},

        tabBarIcon: ({focused, color, size}) => {
          // You can return any component that you like here!
          if (route.name === 'HomeStack') {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                <View style={{ width: width/5, alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={focused ? Images.orders : Images.ordersUnselected}
                    style={styles.imgStyle}
                    color={color}
                    size={size}
                    resizeMode='contain'
                  />
                  <Text>Order</Text>
                </View>
            </TouchableOpacity>
      )}
          if (route.name === 'InventoryScreen') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('InventoryScreen')}>
                <View style={{ width: width/5, alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={focused ? Images.inventory : Images.inventoryUnselected}
                    style={styles.imgStyle}
                    color={color}
                    size={size}

                  />
                  <Text>Inventory</Text>
                </View>
            </TouchableOpacity>
            );
          }
          if (route.name === 'NotificationScreen') {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
                <View style={{ width: width/5, alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                  source={focused ? Images.notification : Images.notification}
                  style={styles.imgStyle}
                  color={color}
                  size={size}

                  />
                  <Text>Notification</Text>
              </View>
            </TouchableOpacity>)
          }
          if (route.name === 'SettingsScreen') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                <View style={{ width: width/5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      source={focused ? Images.settings : Images.settingsUnselected}
                      style={styles.imgStyle}
                      color={color}
                      size={size}
                    />
                <Text>Settings</Text>
                </View>
              </TouchableOpacity>)
          }
          if (route.name === 'MyAccountScreen') {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('MyAccountScreen')}>
                <View style={{ width: width/5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                    source={focused ? Images.accounts : Images.accountsUnselected}
                    style={styles.imgStyle}
                    color={color}
                    size={size}
                    />
                    <Text>My Account</Text>
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
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            props.navigation.navigate('BottomStack', {
              screen: 'NotificationScreen',
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imgStyle: {
    maxHeight: 30,
    width: 30,
    marginBottom: 5,
  },
  textStyle: {
    color: Colors.black,
    marginLeft: 2
  },
});

export default BottomStack;
