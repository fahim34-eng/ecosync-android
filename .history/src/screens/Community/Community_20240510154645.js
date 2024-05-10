import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Community({ navigation }) {
  const [areaId, setAreaId] = useState('');

  const handleAreaIdChange = (value) => {
    setAreaId(value);
  };

  const handleSubmit = () => {
    console.log("Area ID:", areaId);
    navigation.navigate('Communicate', { areaId: areaId });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter Area ID:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginTop: 10, marginBottom: 10, width: '80%' }}
        onChangeText={handleAreaIdChange}
        value={areaId}
        placeholder="Area ID"
        keyboardType="numeric"
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}
