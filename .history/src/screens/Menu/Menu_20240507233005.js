import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import MenuCategories from '../../components/MenuCategories';
import SpeedDial from '../../components/SpeedDial';
import { ScrollView } from 'react-native-virtualized-view';
import tw from 'twrnc'

export default function Menu({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <ScrollView style={tw`min-h-screen`} >
        <MenuCategories navigation={navigation} />
        <SpeedDial />
    </ScrollView>
      

  )
}

