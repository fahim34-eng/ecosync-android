import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from 'twrnc'
import Navbar from '../../components/Navbar';
import Grid from '../../components/Grid';
import BottomNav from '../../components/BottomNav';
import { isLabeledStatement } from 'typescript';
import Map from '../../components/system_admin/Map';
import { STSSelection } from '../../components/system_admin/STSSelection';

export default function Dashboard({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
     headerShown: false,

    });
  }, [navigation]);

  return (
    <ScrollView style={tw`flex-1 w-[95%] mx-auto`}>
      <Text style = {tw`py-2 text-black`}>
        See all the STS & Landfill locations here :
      </Text>
      {/* <Map /> */}
      <View style={tw`flex-1`}>
        <STSSelection />
      </View>
    </ScrollView>
  )
}