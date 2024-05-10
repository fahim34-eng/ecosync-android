import { View, Text, Dimensions } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import MenuCategories from '../../components/MenuCategories';
import tw from 'twrnc';
import { ScrollView } from 'react-native-virtualized-view';
import SpeedDial from '../../components/ui/SpeedDial';
import Loading from '../../components/ui/Loading';
import { Avatar } from 'native-base';
import AvatarComponent from '../../components/ui/AvatarComponent';

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
                <AvatarComponent />
            </ScrollView>
        </View>
    );
}
