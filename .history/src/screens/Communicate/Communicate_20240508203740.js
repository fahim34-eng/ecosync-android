import { View, Text } from 'react-native'
import React from 'react'
import RealTimeMessage from '../../components/ui/RealTimeMessage'

export default function Communicate() {
  return (
    <View style={{ height : 500 }}>
      <RealTimeMessage />
    </View>
  )
}