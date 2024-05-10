import { View, Text, Dimensions } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import MenuCategories from '../../components/MenuCategories';
import tw from 'twrnc';
import { ScrollView } from 'react-native-virtualized-view';
import MenuComponent from '../../components/ui/MenuComponent';
import RadioButtonComponent from '../../components/ui/RadioButtonComponent';

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
                <RadioButtonComponent />
            </ScrollView>
        </View>
    );
}
