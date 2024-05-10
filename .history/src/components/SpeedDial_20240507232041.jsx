import React from 'react';
import { SpeedDial } from '@rneui/themed';
import { View } from 'native-base';

export default () => {
    const [open, setOpen] = React.useState(false);
    return (
      <View style={{ position: 'fixed', bottom: 0, right: 0 }}>
        <SpeedDial
          isOpen={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          direction="up"
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
      </View>
    );
};