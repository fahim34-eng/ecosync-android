import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from "react-native-maps";

export default function MarkerDetail({ item }) {
  console.log("item")
  return (
    <View>
      <Marker
        coordinate={{ latitude : item.latitude, longitude : item.longitude }}
        title="Landfill"
        description="Landfill & STS Location Information"
      />
    </View>
  )
}