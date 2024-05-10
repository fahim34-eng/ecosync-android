import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { LineChart } from "react-native-chart-kit";

export default function LineChartComponent({
  header,
  height,
  width,
  labels,
  data,
  yAxisLabel,
  yAxisSuffix,
  bezier,
}){
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={width}
        height={height}
        yAxisLabel={yAxisLabel ? yAxisLabel : ""}
        yAxisSuffix={yAxisSuffix ? yAxisSuffix : ""}
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
        bezier={bezier}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    paddingTop: 5,
  },
});
