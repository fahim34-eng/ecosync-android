import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/ui/CardComponent';
import { ENDPOINT } from '../../../GlobalVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-virtualized-view';
import { SelectTopic } from '../../components/ui/SelectTopic';
import tw from 'twrnc';

export default function Issue() {
  const [issues, setIssues] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null); 
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

  console.log(issues)

  return (
    <View>
      <View style={tw`mx-2`}>
        <SelectTopic topic={selectedTopic} setTopic={setSelectedTopic} />
      </View>
      <ScrollView>
      {issues.map((issue) => (
        <CardComponent key={issue.id} issue={issue} />
      ))}
    </ScrollView>
    </View>
  )
}