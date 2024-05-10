import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

export default function OilStatShow({ stat }) {
  return (
    <LineChart
        data={{
            labels: stat?.map((item) => item.date),
            datasets: [
                {
                    data: stat.map((item) => item.oil_consumption),
                },
            ],
        
        }}
        labels
        width={Dimensions.get("window").width}
        height={256}
        verticalLabelRotation={30}
        bezier
    />
  )
}