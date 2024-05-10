import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import RealTimeMessage from '../../components/ui/RealTimeMessage'
import { ScrollView } from 'react-native-virtualized-view'
const { height, width } = Dimensions.get('window')

export default function Communicate() {
  return (
    <View style={styles.container}>
      <RealTimeMessage />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        alignItems: 'center',
        display: 'flex',
        width: width,
    },
    headingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
})
