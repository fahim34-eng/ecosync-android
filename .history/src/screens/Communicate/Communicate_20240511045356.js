import React from 'react';
import { View, Text, Dimensions, KeyboardAvoidingView } from 'react-native';
import RealTimeMessage from '../../components/ui/RealTimeMessage';
import tw from 'twrnc'; 

export default function Communicate({ route }) {
  const { areaId } = route.params;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
    <View style={{ height: Dimensions.get("window").height - 50 }}>
      <RealTimeMessage areaId={areaId} />
    </View>
    </KeyboardAvoidingView>
  );
}
