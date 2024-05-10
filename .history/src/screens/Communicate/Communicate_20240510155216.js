import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import RealTimeMessage from '../../components/ui/RealTimeMessage';

export default function Communicate({ route }) {
  const { areaId } = route.params;

  return (
    <View style={{ height: Dimensions.get("window").height - 50 }}>
      <Text>Area ID: {areaId}</Text>
      <RealTimeMessage />
    </View>
  );
}
