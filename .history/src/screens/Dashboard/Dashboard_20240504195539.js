import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from 'twrnc'
import Navbar from '../../components/Navbar';
import Grid from '../../components/Grid';
import BottomNav from '../../components/BottomNav';
import { isLabeledStatement } from 'typescript';

export default function Dashboard({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
     headerShown: false,

    });
  }, [navigation]);

  return (
    <View style={tw`flex-1`}>
      {/* <Grid /> */}
      {/* <BottomNav /> */}
    </View>
  )
}