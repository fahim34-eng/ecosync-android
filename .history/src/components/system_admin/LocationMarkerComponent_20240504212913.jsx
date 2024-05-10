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
      {sts.map((item, index) => {
        <Marker
            coordinate={{ latitude : item.latitude, longitude : item.longitude }}
            title="Landfill"
            description="Landfill & STS Location Information"
        />
      })}
      {landfill.map((item, index) => {
        <Marker
            coordinate={{ latitude : item.latitude, longitude : item.longitude }}
            title="Landfill"
            description="Landfill & STS Location Information"
        />
      })}
    </>
  )
}