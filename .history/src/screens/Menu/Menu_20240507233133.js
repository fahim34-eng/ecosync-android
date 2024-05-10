import { View, Text, ScrollView, Dimensions } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import MenuCategories from '../../components/MenuCategories';
import SpeedDial from '../../components/SpeedDial';
import tw from 'twrnc';

const { height } = Dimensions.get('window');

export default function Menu({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <MenuCategories navigation={navigation} />
            </ScrollView>
            <SpeedDial />
        </View>
    );
}
