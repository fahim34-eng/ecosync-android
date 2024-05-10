import React from 'react';
import { SpeedDial } from '@rneui/themed';
import { View } from 'native-base';
import tw from 'twrnc'

export default () => {
    const [open, setOpen] = React.useState(false);
    return (
        <SpeedDial
          isOpen={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          direction="down"
          icon="add"
        >
          <SpeedDial.Action
            icon="edit"
            onPress={() => console.log('Edit')}
          />
          <SpeedDial.Action
            icon="delete"
            onPress={() => console.log('Delete')}
          />
        </SpeedDial>
    );
};