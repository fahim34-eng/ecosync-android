import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ToastAndroid } from "react-native";
import { ENDPOINT } from "../../../GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

export function STSSelection({ selectedSTS, setSelectedSTS, inLandfill = false }) {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => { 
    const fetchLocations = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        const response = await fetch(`${ENDPOINT}/sts/all`, {
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
        console.log(data)
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    const selectLocation = locations.find(location => location.id == value);
  };
  const [open, setOpen] = useState(false);

  return (
    <View>
      <DropDownPicker
        value={selectedLocation}
        items={locations.map(location => ({ label: location.name, value: location.id }))}
        setOpen={setOpen}
        open={open}
        setValue={handleLocationChange}
        style={{ zIndex: 1000, marginBottom: 100, marginTop: 10 }}
      />
    </View>
  );
}
