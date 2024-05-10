import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

export default function OilStatShow({ stat }) {
  return (
    <LineChart
        data={data}
        width={Dimensions.get("window").width}
        height={256}
        verticalLabelRotation={30}
        bezier
    />
  )
}