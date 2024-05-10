import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ToastAndroid } from "react-native";
import { ENDPOINT } from "../../../GlobalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

export function STSSelection({ selectedSTS, setSelectedSTS, inLandfill = false }) {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

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
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchLocations();
  }, []);

  const handleLocationChange = (value) => {
    const selectLocation = locations.find(location => location.id == value);
    setSelectedSTS(selectLocation);
  };

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <DropDownPicker
          items={locations.map(location =>
