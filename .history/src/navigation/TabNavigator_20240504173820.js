import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { useLayoutEffect } from 'react'
import Menu from '../screens/Menu';
import Dashboard from '../screens/Dashboard';
import tw from "twrnc";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <Tab.Navigator initialRouteName='Dashboard' 
    screenOptions={{
        
    }} >
      <Tab.Screen name="Menu" component={Menu} 
            options={{
                tabBarIcon : (color, size) => (
                    <Ionicons name = 'menu' color = {color} size = {20} />
                )
            }}
      />
      <Tab.Screen name="Dashboard" component={Dashboard} 
            options={{
                tabBarIcon : (color, size) => (
                    <AntDesign name = 'dashboard' color = {color} size = {20} />
                )
            }}
      />
      <Tab.Screen name="Settings" component={Settings} 
            options={{
                tabBarIcon : (color, size) => (
                    <Ionicons name = 'settings-outline' color = {color} size = {20} />
                )
            }}
      />
    </Tab.Navigator>
  )
}
