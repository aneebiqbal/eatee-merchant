// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Foundation from 'react-native-vector-icons/Foundation';

// //Screens
// import HomeScreen from '../containers/screens/HomeScreen';
// import ProfileScreen from '../containers/screens/ProfileScreen';
// import PaymentScreen from '../containers/screens/PaymentScreen/PaymentScreen';
// import OrdersScreen from '../containers/screens/OrdersScreen/OrdersScreen';
// import FavouriteRestaurantsScreen from '../containers/screens/FavouriteRestaurantsScreen';

// import {Colors} from '../theme';
// import {createStackNavigator} from '@react-navigation/stack';

// const _BottomStack = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="HomeScreen" headerMode={'screen'}>
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const BottomStack = props => {
//   return (
//     <_BottomStack.Navigator
//       screenOptions={({route}) => ({
//         tabBarLabel: () => {
//           return null;
//         },
//         tabBarActiveTintColor: Colors.primary,
//         inactiveTintColor: 'gray',
//         tabBarStyle: {backgroundColor: Colors.lightGray},

//         tabBarIcon: ({focused, color, size}) => {
//           // You can return any component that you like here!
//           if (route.name === 'HomeStack') {
//             return <Foundation name="home" size={size} color={color} />;
//           }
//           if (route.name === 'Orders') {
//             return (
//               <Foundation name="clipboard-notes" size={size} color={color} />
//             );
//           }

//           if (route.name === 'Payment') {
//             return <Ionicons name="wallet-outline" size={size} color={color} />;
//           }
//           if (route.name === 'Profile') {
//             return <Feather name="user" size={size} color={color} />;
//           }
//         },
//         unmountOnBlur: true,
//       })}>
//       <_BottomStack.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{headerShown: false}}
//         listeners={{
//           tabPress: e => {
//             e.preventDefault();
//             props.navigation.replace('BottomStack', {
//               screen: 'HomeStack',
//             });
//           },
//         }}
//       />
//       <_BottomStack.Screen
//         name="Orders"
//         component={OrdersScreen}
//         options={{headerShown: false}}
//         listeners={{
//           tabPress: e => {
//             e.preventDefault();
//             props.navigation.navigate('BottomStack', {
//               screen: 'Orders',
//             });
//           },
//         }}
//       />
//       <_BottomStack.Screen
//         name="Payment"
//         component={PaymentScreen}
//         options={{headerShown: false}}
//         listeners={{
//           tabPress: e => {
//             e.preventDefault();
//             props.navigation.navigate('BottomStack', {
//               screen: 'Payment',
//             });
//           },
//         }}
//       />
//       <_BottomStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{headerShown: false}}
//         listeners={{
//           tabPress: e => {
//             e.preventDefault();
//             props.navigation.navigate('BottomStack', {
//               screen: 'Profile',
//             });
//           },
//         }}
//       />
//     </_BottomStack.Navigator>
//   );
// };

// export default BottomStack;
