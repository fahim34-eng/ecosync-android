import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GridView() {
  return (
    <View style={styles.container}>
        <View style={styles.upperItem}>
            {/* Content of the upper item */}
        </View>
        <View style={styles.lowerRow}>
            <View style={styles.lowerItem}>
                {/* Content of the lower item 1 */}
            </View>
            <View style={styles.lowerItem}>
                {/* Content of the lower item 2 */}
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    upperItem: {
        width: '100%', // Set width to 100% to span the whole row
        height: 100,
        backgroundColor: 'red'
    },
    lowerRow: {
        flexDirection: 'row', // Arrange items horizontally
        marginTop: 10, // Add some margin to separate upper and lower items
    },
    lowerItem: {
        flex: 1, // Make items take equal space within the row
        height: 100,
        backgroundColor: 'blue'
    }
})
