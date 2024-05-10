import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AreaSelection } from '../../components/system_admin/AreaSelection';

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
      <Text>Enter Your Area ID:</Text>
      <AreaSelection selectedSTS={areaId} setSelectedSTS={handleAreaIdChange} />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}
