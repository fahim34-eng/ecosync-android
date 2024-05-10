import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import RealTimeMessage from '../../components/ui/RealTimeMessage'
import { ScrollView } from 'react-native-virtualized-view'
const { height } = Dimensions.get('window')

export default function Communicate() {
  return (
    <ScrollView style={{ height : height }}>
      <RealTimeMessage />
    </ScrollView>
  )
}
