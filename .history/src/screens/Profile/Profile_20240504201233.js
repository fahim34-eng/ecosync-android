import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import MenuCategories from '../../components/MenuCategories';

export default function Profile({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <View>
        <MenuCategories navigation={navigation} />
    </View>
      

  )
}

