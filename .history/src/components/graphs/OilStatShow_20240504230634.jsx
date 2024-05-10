import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

export default function OilStatShow({ stat }) {
  return (
    <View>
        { stat.length > 0 &&
            <LineChart
                data={{
                    labels: stat?.map((item) => item.date),
                    datasets: [
                        {
                            data: stat.map((item) => item.total_oil_cost),
                        },
                    ],
                
                }}
                width={Dimensions.get("window").width}
                height={256}
                yAxisLabel={"BDT :"}
                yAxisSuffix={""}
                yAxisInterval={1}
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
                bezier={true}
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
        }
    </View>
  )
}