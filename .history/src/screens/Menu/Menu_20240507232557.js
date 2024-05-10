import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import MenuCategories from '../../components/MenuCategories';
import SpeedDial from '../../components/SpeedDial';

export default function Menu({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <View>
        <MenuCategories navigation={navigation} />
        <View>
          <SpeedDial />
        </View>
    </View>
      

  )
}

