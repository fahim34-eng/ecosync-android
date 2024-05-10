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
            <Text style={styles.item}>{item.title}</Text>
        </View>
    
    }
      estimatedItemSize={20}
    />
  );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5fcff",
    },
    item: {
        padding : 20,
        margin : 2,
    },
    text: {
        color: "white",
        fontSize: 20,
    },
});