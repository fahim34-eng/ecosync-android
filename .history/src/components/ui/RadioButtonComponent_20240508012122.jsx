import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioButtonComponent = () => {
  const [value, setValue] = React.useState(null);
  const items = [
    {
      id: 1,
      name: 'Entry',
    },
    {
      id: 2,
      name: 'Main',
    },
    {
      id: 3,
      name: 'Dessert',
    },
    {
      id: 4,
      name: 'Drinks',
    },
  ];

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      {items.map((item) => (
        <View key={item.id} style={styles.container}>
          <Text>{item.name}</Text>
          <RadioButton value={item.id} /> 
        </View>
      ))}
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
