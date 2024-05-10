import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'

export default function VehicleStatShow({ stat }) {
  return (
    <View>
      <PieChart
            data={
                stat.map((item) => ({
                    name: item.truck_type,
                    population: item.count,
                    color: `rgba(134, 65, 244, ${Math.random()})`,
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15,
                }))
            }
            width={Dimensions.get("window").width}
            height={220}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
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