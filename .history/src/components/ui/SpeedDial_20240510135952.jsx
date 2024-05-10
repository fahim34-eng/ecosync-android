import React, { useState } from 'react';
import { SpeedDial } from '@rneui/themed';
import { View } from 'native-base';
import tw from 'twrnc';
import { Text } from 'react-native';
import DialogComponent from './DialogComponent';

export default ({ navigation }) => {
    const [open, setOpen] = useState(false);
    return (
        <SpeedDial
            isOpen={open}
            icon={{ name: 'edit', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
        >
            <SpeedDial.Action
                icon={{ name: 'add', color: '#fff' }}
                title="Post New Issue"
                onPress={() => {
                    navigation.navigate('PostIssue');
                }}
            />
        </SpeedDial>
    );
};
