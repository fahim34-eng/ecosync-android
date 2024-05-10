import { View, Text, ScrollView } from 'react-native'
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
    <ScrollView style={tw`flex-1`}>
      <Text style = {tw`px-4 py-2 text-lg text-black`}>
        See all the STS & Landfill Locations Here
      </Text>
    </ScrollView>
  )
}