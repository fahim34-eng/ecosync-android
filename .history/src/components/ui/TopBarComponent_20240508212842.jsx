import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function TopBarComponent({ title }) {
  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title={title} />
        {/* <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
    )
  
}
