import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'

const chartConfig = {
    backgroundGradientFrom: '#228BFC',
    backgroundGradientTo: "#023B78",
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

export default function VehicleStatShow({ stat }) {
  return (
    <View>
      <PieChart
            data={
                stat.map((item) => ({
                    name: item.truck_type,
                    population: item.count,
                    color: `rgba(${Math.random() * 55}, ${Math.random() * 155}, ${Math.random() * 55}, ${Math.random()})`,
                    legendFontColor: "#000",
                    legendFontSize: 10,
                }))
            }
            width={Dimensions.get("window").width}
            height={220}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={0}
            center={[10, 50]}
            absolute
            chartConfig={chartConfig}
     />
    </View>
  )
}