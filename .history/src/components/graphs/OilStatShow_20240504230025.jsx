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
        width={Dimensions.get("window").width}
        height={256}
        verticalLabelRotation={30}
        bezier
        chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            
        }}
    />
  )
}