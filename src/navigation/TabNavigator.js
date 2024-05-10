import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import React, { useLayoutEffect } from 'react'
import Menu from '../screens/Menu';
import Dashboard from '../screens/Dashboard';
import tw from "twrnc";
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <Tab.Navigator initialRouteName='Activities' 
    screenOptions={{
        
    }} >
      <Tab.Screen name="Activities" component={Menu} 
            options={{
                tabBarIcon : (color, size) => (
                    <MaterialCommunityIcons name = 'routes' color = {color} size = {20} />
                )
            }}
      />
      <Tab.Screen name="OverView" component={Dashboard} 
          options={{
                tabBarIcon : (color, size) => (
                    <MaterialCommunityIcons name = 'view-dashboard-outline' color = {color} size = {20} />
                )
            }}
      />
      <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarIcon : (color, size) => (
                    <Feather name = 'user' color = {color} size = {20} />
                )
            }}
      />
    </Tab.Navigator>
  )
}
