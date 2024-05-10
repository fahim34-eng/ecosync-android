import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ToastAndroid } from "react-native";
import { ENDPOINT } from "../../../GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

export function STSSelection({ selectedSTS, setSelectedSTS, inLandfill = false }) {
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
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationChange = (value) => {
    const selectLocation = locations.find(location => location.id == value);
    setSelectedSTS(selectLocation);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <ScrollView>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
    </ScrollView>
  );
}
