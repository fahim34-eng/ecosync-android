import { View, Text, Dimensions } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import MenuCategories from '../../components/MenuCategories';
import tw from 'twrnc';
import { ScrollView } from 'react-native-virtualized-view';
import CheckBoxComponent from '../../components/ui/CheckBoxComponent';
import DrawerComponent from '../../components/ui/DrawerComponent';

const { height } = Dimensions.get('window');

export default function Menu({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ }}>
                <MenuCategories navigation={navigation} />
                <DrawerComponent />
            </ScrollView>
        </View>
    );
}
