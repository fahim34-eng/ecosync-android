import { View, Text } from 'react-native'
import React from 'react'
import MarkerDetail from './MarkerDetail'
import { Marker } from "react-native-maps";

export default function LocationMarkerComponent({ sts, landfill }) {
  sts.map((item, index) => {
    console.log(item.latitude, item.longitude)
  })
  return (
        <Marker
            coordinate={{ latitude : 23.72151368600494, longitude : 90.3904084278417 }}
            title="Landfill"
            description="Landfill & STS Location Information"
        />


  )
}