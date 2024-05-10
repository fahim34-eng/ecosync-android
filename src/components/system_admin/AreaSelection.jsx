import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ToastAndroid } from "react-native";
import { ENDPOINT } from "../../../GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

export function AreaSelection({ selectedSTS, setSelectedSTS }) {
  const [locations, setLocations] = useState([]);
  useEffect(() => { 
    const fetchLocations = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        const response = await fetch(`${ENDPOINT}/contractor/locations/all`, {
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
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  console.log(locations)

  const handleLocationChange = (value) => {
    setSelectedSTS(value);
    const selectLocation = locations.find(location => location.id == value);
  };
  const [open, setOpen] = useState(false);
  console.log(selectedSTS)
  return (
    <View>
      <DropDownPicker
        value={selectedSTS}
        items={locations.map(location => ({ label: "Region : " + location.region + " " + "Ward : " + location.ward + " " + "Block : " + location.name, value: location.id }))}
        setOpen={setOpen}
        open={open}
        setValue={handleLocationChange}
        style={{ zIndex: 1000, marginBottom: 10, marginTop: 10 }}
      />
    </View>
  );
}
