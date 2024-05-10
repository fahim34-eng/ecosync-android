import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import tw from 'twrnc'
import Navbar from '../../components/Navbar';
import Grid from '../../components/Grid';
import BottomNav from '../../components/BottomNav';
import { isLabeledStatement } from 'typescript';
import Map from '../../components/system_admin/Map';
import { STSSelection } from '../../components/system_admin/STSSelection';
import { ScrollView } from 'react-native-virtualized-view'

export default function Dashboard({ navigation }) {
  const [selectedSTS, setSelectedSTS] = useState(null);
  const [selectedLandfill, setSelectedLandfill] = useState(null);
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

      <Map />
      <STSSelection selectedSTS={selectedSTS} setSelectedSTS={setSelectedSTS} />
    </ScrollView>
  )
}