import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

export default function ListComponent() {
  return (
    <FlashList
      data={DATA}
      renderItem = 
    {({ item }) => 
        <View style={styles.container}>
            <Text>{item.title}</Text>
        </View>
    
    }
      estimatedItemSize={200}
    />
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
    },
    item: {
        backgroundColor: "#6789a4",
        margin: 8,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 20,
    },
});