import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

    useEffect(() => {
      AsyncStorage.getItem('token').then((value) => {
        console.log(value)
      })
    }, [])


  return (
    <View>
        <Text>{JSON.stringify(token)}</Text>
    </View>
      

  )
}

