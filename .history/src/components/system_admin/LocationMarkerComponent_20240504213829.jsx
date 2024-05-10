import { View, Text } from 'react-native'
import React from 'react'
import MarkerDetail from './MarkerDetail'
import { Marker } from "react-native-maps";

export default function LocationMarkerComponent({ sts, landfill }) {
  return (
    <>
      {sts.map((item, index) => {
        (
            <MarkerDetail item={item} key={index} />
        )  
      })}
      {landfill.map((item, index) => {
        (
            <MarkerDetail item={item} key={index} />
        )
      })}
    </>
  )
}