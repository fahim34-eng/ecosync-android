import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import ANTD from "react-native-vector-icons/AntDesign";
import FTHR from "react-native-vector-icons/Feather";

export default function BottomNav() {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.tabbar}>
      
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.View
            style={[
              styles.itemgroup,
              {
                transform: [{ scale: scaleValue }],
              },
            ]}
          >
            <Text>
              <FTHR name="settings" size={20} color="#111" />
            </Text>
            <Text>Settings</Text>
          </Animated.View>
        </Pressable>
      
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.View
            style={[
              styles.itemgroup,
              {
                transform: [{ scale: scaleValue }],
              },
            ]}
          >
            <Text>
              <ANTD name="dashboard" size={20} color="#111" />
            </Text>
            <Text>Dashboard</Text>
          </Animated.View>
        </Pressable>

        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.View
            style={[
              styles.itemgroup,
              {
                transform: [{ scale: scaleValue }],
              },
            ]}
          >
            <Text>
              <ANTD name="user" size={20} color="#111" />
            </Text>
            <Text>Profile</Text>
          </Animated.View>
        </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#FFF",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    borderRadius: 10,
  },
  itemgroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
