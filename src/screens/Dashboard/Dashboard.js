import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINT } from '../../../GlobalVariables';
import Map from '../../components/system_admin/Map';
import ListComponent from '../../components/ui/ListComponent';
import SpeedDial from '../../components/ui/SpeedDial';

export default function Dashboard({ navigation }) {
  const [selectedSTS, setSelectedSTS] = useState(null);
  const [selectedLandfill, setSelectedLandfill] = useState(null);
  const [oilStats, setOilStats] = useState([]);
  const [vehicleStats, setVehicleStats] = useState([]);
  const [stsStats, setSTSStats] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  

  return (
    <View style={tw`flex-1`}>
      <ScrollView contentContainerStyle={tw`pb-16`}>
        <Text style={tw`my-2`}>Check Nearby Facilities</Text>
        <Map />
        <Text style={tw`my-2`}>Latest Waste Management Related Information</Text>
        <ListComponent />
      </ScrollView>
      <SpeedDial />
    </View>
  );
}
