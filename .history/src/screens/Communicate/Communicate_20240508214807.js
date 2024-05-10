import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import RealTimeMessage from '../../components/ui/RealTimeMessage'

export default function Communicate() {
  return (
    <View style={{ height : Dimensions.get("window").height - 50  }}>
      <RealTimeMessage />
    </View>
  )
}