import { View, Text } from 'react-native'
import React from 'react'
import MarkerDetail from './MarkerDetail'
import { Marker } from "react-native-maps";

export default function LocationMarkerComponent({ sts, landfill }) {
  landfill.map((item, index) => {
    console.log(item)
  })
  return (
    <>

        <Marker
            coordinate={{ latitude : sts[1].latitude, longitude : sts[1].longitude }}
            title="Landfill"
            description="Landfill & STS Location Information"
        />
        <Marker
            coordinate={{ latitude : sts[0].latitude, longitude : sts[0].longitude }}
            title="Landfill"
            description="Landfill & STS Location Information"
        />

      
    </>
  )
}