import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function TopBarComponent({ title }) {
  const navigation = useNavigation(); // Access navigation object

  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} /> {/* Use navigation.goBack() to navigate back */}
        <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
