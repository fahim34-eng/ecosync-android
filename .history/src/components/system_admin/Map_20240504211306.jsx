import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { ENDPOINT } from '../../../GlobalVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Map() {
    const [latitude, setLatitude] = useState(23.7270478)
    const [longitude, setLongitude] = useState(90.4031032)  

    useEffect(() => {
        let token = AsyncStorage.getItem("token")
                                .then((value) => {
                                    return JSON.parse(value)
                                })
        
        if (!token) {
            console.log("No token found")
            return
        }
        console.log(token.accessToken)
        // fetch(`${ENDPOINT}/sts/all`, {
        //     method: 'GET',
        //     headers : {'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + token.accessToken,
        //     "ngrok-skip-browser-warning": "69420"
        //     }
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if(data.detail === "Unauthorized") {
        //             console.log("Unauthorized")
        //             return
        //         }
        //         console.log(data)
        //     })
    }, [])

    useEffect(() => {
        
    }, [])

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
            <Marker
                coordinate={{ latitude, longitude }}
                title="Your Car"
                description="Dhaka, Bangladesh"
            />
        </MapView>
    </View>
  )
}