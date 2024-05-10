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
import Communicate from './src/screens/Communicate';
import PostIssue from './src/screens/PostIssue';
import Facilities from './src/screens/Facilities';
import Issue from './src/screens/Issue';
import Contents from './src/screens/Contents';
import Volunteer from './src/screens/Volunteer';
import Community from './src/screens/Community';
import PostContent from './src/screens/PostContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigator"  >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Employees" component={Employees} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="Communicate" component={Communicate} /> 
          <Stack.Screen name="PostIssue" component={PostIssue} /> 
          <Stack.Screen name="Facilities" component={Facilities} /> 
          <Stack.Screen name="Issues" component={Issue} /> 
          <Stack.Screen name="Contents" component={Contents} />  
          <Stack.Screen name="Volunteer" component={Volunteer} /> 
          <Stack.Screen name="Community" component={Community} /> 
          <Stack.Screen name="PostContent" component={PostContent} /> 

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


