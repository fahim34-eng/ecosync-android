/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './src/navigation/TabNavigator';
import Employees from './src/screens/Employees';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUpScreen" screenOptions={{ headerShown : false }} >
          <Stack.Screen name="Login" component={LoginScreen} screenOptions={{ headerShown : false }}/>
          <Stack.Screen name="TabNavigator" component={TabNavigator} screenOptions={{ headerShown : false }} />
          <Stack.Screen name="Employees" component={Employees} screenOptions={{ headerShown : false }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} screenOptions={{ headerShown : false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
