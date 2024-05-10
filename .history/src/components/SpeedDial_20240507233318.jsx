import React from 'react';
import { SpeedDial } from '@rneui/themed';
import { View } from 'native-base';
import tw from 'twrnc'
import { Text } from 'react-native';

export default () => {
    const [open, setOpen] = React.useState(false);
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
                title="Add"
                onPress={() => console.log('Add Something')}
            >
                <View style={tw`bg-white p-2 rounded-full`}>
                    <Text style={tw`text-black`}>Add</Text>
                </View>
            </SpeedDial.Action>


            {/* <SpeedDial.Action
                icon={{ name: 'delete', color: '#fff' }}
                title="Delete"
                onPress={() => console.log('Delete Something')}
            /> */}
        </SpeedDial>

    );
};