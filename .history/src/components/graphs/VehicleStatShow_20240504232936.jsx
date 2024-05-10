import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'

export default function VehicleStatShow({ stat }) {
  return (
    <View style={{ width : "full", display : "flex", flexDirection: "row", alignItems : "center", justifyContent : "center", marginBottom : 50 }}>
      <PieChart
            data={
                stat.map((item) => ({
                    name: item.truck_type,
                    population: item.count,
                    color: `rgba(${Math.random() * 155}, ${Math.random() * 155}, ${Math.random() * 155}, ${Math.random()})`,
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 10,
                }))
            }
            width={340}
            height={340}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={40}
            center={[10, 50]}
            absolute
            chartConfig={{
                backgroundGradientFrom: "#228BFC",
                backgroundGradientTo: "#023B78",
                decimalPlaces: 0, 
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 10,
                    display : "flex",
                    flexDirection: "row",
                    alignItems : "center",
                    justifyContent : "center",
                    marginBottom : 20,
                    paddingBottom : 20,
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#eaeaea",
                },
            }}
     />
    </View>
  )
}