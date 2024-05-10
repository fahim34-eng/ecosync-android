import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import RealTimeMessage from '../../components/ui/RealTimeMessage'
import { ScrollView } from 'react-native-virtualized-view'

export default function Communicate() {
  return (
    <ScrollView style={{ height : Dimensions.get("window").height  }}>
      <RealTimeMessage />
    </ScrollView>
  )
}