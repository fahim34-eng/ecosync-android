import { View, Text } from 'react-native'
import React from 'react'
import MarkerDetail from './MarkerDetail'

export default function LocationMarkerComponent({ sts, landfill }) {
  sts.map((item, index) => {
    console.log(item)
  })
  return (
    <>
      {sts.map((item, index) => {
        <MarkerDetail item={item} key={index} />
      })}
      {landfill.map((item, index) => {
        <MarkerDetail item={item} key={index} />
      })}
    </>
  )
}