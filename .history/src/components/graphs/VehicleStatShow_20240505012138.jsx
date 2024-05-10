import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'

const chartConfig = {
  backgroundGradientFrom: '#0A5F59',
  backgroundGradientTo: "#0A5F59",
  backgroundGradientTo: '#0A5F59',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
                    color: `rgba(${Math.random() * 55}, ${Math.random() * 155}, ${Math.random() * 55}, 1)`,
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
      <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'black', marginTop : 10 }}>Total Vehicle and their percentages</Text>
    </View>
  )
}