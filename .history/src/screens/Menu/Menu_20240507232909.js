import { View, Text, StyleSheet } from 'react-native'
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
    <ScrollView contentContainerStyle={styles.container} >
        <MenuCategories navigation={navigation} />
        <SpeedDial />
    </ScrollView>
      

  )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
