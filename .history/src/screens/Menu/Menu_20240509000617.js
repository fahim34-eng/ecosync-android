import { View, Text, Dimensions } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import MenuCategories from '../../components/MenuCategories';
import tw from 'twrnc';
import { ScrollView } from 'react-native-virtualized-view';
import GridView from '../../components/ui/GridView';

const { height } = Dimensions.get('window');

export default function Menu({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <ScrollView style={{ flex: 1 }}>
            <ScrollView>
                <MenuCategories navigation={navigation} />
                <GridView />
            </ScrollView>
        </ScrollView>
    );
}
