import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { ENDPOINT } from '../../../GlobalVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationMarkerComponent from './LocationMarkerComponent';

export default function Map() {
    const [latitude, setLatitude] = useState(23.7270478)
    const [longitude, setLongitude] = useState(90.4031032)  
    const [sts, setSTS] = useState([])
    const [landfill, setLandfill] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem("token");
                if (value !== null) {
                    const token = JSON.parse(value);
                    fetch(`${ENDPOINT}/sts/all`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token.accessToken,
                            "ngrok-skip-browser-warning": "69420"
                        }
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.detail === "Unauthorized") {
                            console.log("Unauthorized")
                            return
                        }
                        setSTS(data)
                    });
                } else {
                    console.log("No token found");
                }
            } catch (error) {
                console.error("Error retrieving token:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem("token");
                if (value !== null) {
                    const token = JSON.parse(value);
                    fetch(`${ENDPOINT}/landfill/all`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token.accessToken,
                            "ngrok-skip-browser-warning": "69420"
                        }
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.detail === "Unauthorized") {
                            console.log("Unauthorized")
                            return
                        }
                        setLandfill(data)
                    });
                } else {
                    console.log("No token found");
                }
            } catch (error) {
                console.error("Error retrieving token:", error);
            }
        };
        fetchData();
    }, []);

    return (
    <View>
        <MapView
            style={{
            height: 220,
            width: Dimensions.get("window").width - 20,
            borderRadius: 30,
            overflow: "hidden",
            
         }}
            zoomEnabled={true}
            initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
         }}
        >
         {sts.map((item, index) => {
            return (
                <Marker
                    key={index}
                    coordinate={{ latitude : item.latitude, longitude : item.longitude }}
                    title="STS"
                    description="STS Location Information"
                />
            )
        })}
        </MapView>
    </View>
  )
}