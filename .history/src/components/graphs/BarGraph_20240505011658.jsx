import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { formatDate } from '../../utility_functions/dateRelated';
import { BarChart } from 'react-native-chart-kit';

const chartConfig = {
    backgroundGradientFrom: '#0A5F59',
    backgroundGradientTo: "#0A5F59",
    backgroundGradientTo: '#0A5F59',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
};

export default function BarGraph({ stat }) {
  console.log(stat)
  return (
    <View>
      {stat &&
      <BarChart
        data={{
            labels: stat?.map((item) => formatDate(item.date)),
            datasets: [
                {
                    data: stat.map((item) => item.truck_count ),
                },
            ],
        }}
        width={Dimensions.get("window").width - 20}
        height={320}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        style={{
            marginVertical: 8,
            borderRadius: 16,
        }}
    />
      }
    </View>
  )
}