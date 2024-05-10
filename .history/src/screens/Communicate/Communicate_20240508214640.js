import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import RealTimeMessage from '../../components/ui/RealTimeMessage'
import { ScrollView } from 'react-native-virtualized-view'
const { height } = Dimensions.get('window')

export default function Communicate() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RealTimeMessage />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        alignItems: 'center',
        display: 'flex',
    },
    headingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
})
