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
import { ProgressChart } from "react-native-chart-kit";

export default function ProgressBarChart({ header, height, width, data, radius, strokeWidth }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <ProgressChart
        data={data}
        width={width}
        height={height}
        radius={radius}
        strokeWidth={strokeWidth}
        chartConfig={{
          backgroundGradientFrom: "#228BFC",
          backgroundGradientTo: "#023B78",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // elevation: 2,
    // borderColor: "#000000",
    // padding: 10,
    borderRadius: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    paddingTop: 5,
  },
});
