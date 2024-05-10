import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ToastAndroid } from "react-native";
import { ENDPOINT } from "../../../GlobalVariables";


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

  return (
    <View>
      {/* <Picker
        selectedValue={selectedSTS ? selectedSTS.value : "default"}
        onValueChange={handleLocationChange}
        style={{ backgroundColor: "#f0f0f0", color: "#000", height: 40, width: inLandfill ? 160 : '100%' }}
      >
        <Picker.Item label="Select STS Location" value="default" disabled />
        {locations.map((location) => (
          <Picker.Item key={location.id} label={`${location.id} - (${location.name})`} value={location.id} />
        ))}
      </Picker> */}
    </View>
  );
}
