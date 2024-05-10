import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import MenuCategories from '../../components/MenuCategories';
import SpeedDial from '../../components/SpeedDial';
import { ScrollView } from 'native-base';

export default function Menu({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <ScrollView>
        <MenuCategories navigation={navigation} />
        <SpeedDial />
    </ScrollView>
      

  )
}

