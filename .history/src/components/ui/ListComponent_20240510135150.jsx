import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { light_gray } from "../../../GlobalVariables";

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
      height: 200
    },
    item: {
        padding : 20,
        borderColor : light_gray,
        borderWidth : 1,
        borderRadius : 10,
    },
    text: {
        color: "white",
        fontSize: 20,
    },
});