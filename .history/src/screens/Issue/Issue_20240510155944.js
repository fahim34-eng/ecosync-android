import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Issue() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    async function getIssues() {
      const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        const response = await fetch(`${ENDPOINT}/citizen/issue/all`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken.accessToken,
            "ngrok-skip-browser-warning": "69420"
          }
        });
        const data = await response.json();
        if (data.detail === "Unauthorized") {
          ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
        }
        else {
          setIssues(data)
        }
    }
    getIssues()
  }, [])
  return (
    <View>
      <Text></Text>
    </View>
  )
}