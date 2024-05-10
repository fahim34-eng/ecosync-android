import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioButtonComponent = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={styles.container}>
        <Text>First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
});


export default RadioButtonComponent;