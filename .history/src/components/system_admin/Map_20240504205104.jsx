import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from "react-native-maps";

export default function Map() {
    const [latitude, setLatitude] = useState(23.7270478)
    const [longitude, setLongitude] = useState(90.4031032)  
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