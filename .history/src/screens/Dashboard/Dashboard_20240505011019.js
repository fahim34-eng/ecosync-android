import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import tw from 'twrnc'
import Navbar from '../../components/Navbar';
import Grid from '../../components/Grid';
import BottomNav from '../../components/BottomNav';
import { isLabeledStatement } from 'typescript';
import Map from '../../components/system_admin/Map';
import { STSSelection } from '../../components/system_admin/STSSelection';
import { ScrollView } from 'react-native-virtualized-view'
import { ENDPOINT } from '../../../GlobalVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OilStatShow from '../../components/graphs/OilStatShow';
import VehicleStatShow from '../../components/graphs/VehicleStatShow';
import BarGraph from '../../components/graphs/BarGraph';

export default function Dashboard({ navigation }) {
  const [selectedSTS, setSelectedSTS] = useState(null);
  const [selectedLandfill, setSelectedLandfill] = useState(null);
  const [oilStats, setOilStats] = useState([])
  const [vehicleStats, setVehicleStats] = useState([])
  const [stsStats, setSTSStats] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
     headerShown: false,

    });
  }, [navigation]);

  // oil cost info

  useEffect(() => {
    async function getStats() {
      const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        const response = await fetch(`${ENDPOINT}/vehicle/stats/oil_consumption/7days?landfill_id=0`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken.accessToken,
            "ngrok-skip-browser-warning": "69420"
          }
        });
        const data = await response.json();
        if (data.detail === "Unauthorized") {
          ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
        }
        else {
          setOilStats(data)
        }
    }
    
    getStats()
    
  }, [])

  // vehicle info

  useEffect(() => {
    async function getStats() {
      const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        const response = await fetch(`${ENDPOINT}/sts/${selectedSTS}/stat/7days`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken.accessToken,
            "ngrok-skip-browser-warning": "69420"
          }
        });
        const data = await response.json();
        if (data.detail === "Unauthorized") {
          ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
        }
        else {
          console.log(data)
        }
    }
    getStats()
    
  }, [selectedSTS])

  // sts info

  useEffect(() => {
    async function getStats() {
      const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        const response = await fetch(`${ENDPOINT}/landfill/count_stat/today?landfill_id=0`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken.accessToken,
            "ngrok-skip-browser-warning": "69420"
          }
        });
        const data = await response.json();
        if (data.detail === "Unauthorized") {
          ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
        }
        else {
          setVehicleStats(data?.truck_percentages)
        }
    }
    getStats()
    
  }, [])

  


  return (
    <ScrollView style={tw`flex-1 w-[95%] mx-auto`}>
      <Text style = {tw`py-2 text-black`}>
        See all the STS & Landfill locations here :
      </Text>

      {/* <Map /> */}
      {/* <OilStatShow stat = {oilStats} /> */}
      {/* <VehicleStatShow stat = {vehicleStats} /> */}
      <STSSelection selectedSTS={selectedSTS} setSelectedSTS={setSelectedSTS} />
      <BarGraph stat={stsStats[0]} />
    </ScrollView>
  )
}