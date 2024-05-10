import { View, Text } from 'react-native'
import React from 'react'
import MarkerDetail from './MarkerDetail'

export default function LocationMarkerComponent({ sts, landfill }) {
  
  return (
    <View>
      {sts.map((item, index) => {
        <MarkerDetail item={item} key={index} />
      })}
      {landfill.map((item, index) => {
        <MarkerDetail item={item} key={index} />
      })}
    </View>
  )
}