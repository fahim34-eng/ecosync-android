import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { formatDate } from '../../utility_functions/dateRelated';
import { BarChart } from 'react-native-chart-kit';

const chartConfig = {
    backgroundGradientFrom: '#228BFC',
    backgroundGradientTo: "#023B78",
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
};

export default function BarGraph({ stat }) {
  console.log(stat)
  return (
    <View>
      {/* {stat &&
      <BarChart
        data={{
            labels: stat?.map((item) => formatDate(item.date)),
            datasets: [
                {
                    data: stat.map((item) => item.truck_count ),
                },
            ],
        }}
        width={Dimensions.get("window").width}
        height={320}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={30}
    />
      } */}
    </View>
  )
}