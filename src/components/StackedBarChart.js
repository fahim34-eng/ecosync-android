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
import { StackedBarChart } from "react-native-chart-kit";

export default function stackedBarChart({
  header,
  height,
  width,
  data,
  yAxisLabel,
  yAxisSuffix,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <StackedBarChart
        data={data}
        width={width}
        height={height}
        decimalPlaces={0}
        yAxisLabel={yAxisLabel ? yAxisLabel : ""}
        yAxisSuffix={yAxisSuffix ? yAxisSuffix : ""}
        chartConfig={{
          backgroundGradientFrom: "#228BFC",
          backgroundGradientTo: "#023B78",
          decimalPlaces: 0, // optional, defaults to 2dp
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
