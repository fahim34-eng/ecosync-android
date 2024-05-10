import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { formatDate } from '../../utility_functions/dateRelated'

const chartConfig = {
    backgroundGradientFrom: '#0A5F59',
    backgroundGradientTo: "#0A5F59",
    backgroundGradientTo: '#0A5F59',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
};

export default function OilStatShow({ stat }) {
 
  return (
    <View>
        { stat.length > 0 &&
            <LineChart
                data={{
                    labels: stat?.map((item) => formatDate(item.date)),
                    datasets: [
                        {
                            data: stat.map((item) => item.total_oil_cost ),
                        },
                    ],
                
                }}
                width={Dimensions.get("window").width - 20}
                height={256}
                yAxisLabel={"BDT :"}
                yAxisSuffix={""}
                yAxisInterval={1}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        }
        <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'black'}}>Oil Cost Over The Last Seven Days</Text>
    </View>
  )
}