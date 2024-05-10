import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);
    
    let token = AsyncStorage.getItem('token')
    console.log(token)

  return (
    <View>
        <Text>{JSON.stringify(token)}</Text>
    </View>
      

  )
}

