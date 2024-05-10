import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

export default function Profile({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
    <View>
        <Text>Profile</Text>
    </View>
      

  )
}

