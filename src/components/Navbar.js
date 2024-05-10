import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Image source={"../assets/menu.png"} style={styles.menu}></Image>
      <Text style={tw`text-lg`}>{title}</Text>
      <Image source={"../assets/avatar.png"} style={styles.avatar}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#FFF",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    borderBottomWidth: 1, 
    borderBottomColor: "lightgray", 
    borderStyle: "solid", 
    paddingVertical: 10, 
    borderRadius : 10
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 2,
    //   },
    //   android: {
    //     elevation: 8,
    //   },
    // }),
  },
  avatar: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  menu: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});

export default Navbar;
