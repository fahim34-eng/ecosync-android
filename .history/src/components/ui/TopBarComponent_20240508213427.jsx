import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 

export default function TopBarComponent({ title }) {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigation.goBack('Login')}} />
        <Appbar.Content title={title} />
        {/* <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
    )
  
}
