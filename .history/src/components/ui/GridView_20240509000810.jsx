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
            <View style={{...styles.lowerItem, backgroundColor : "black"}}>
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
        width: '100%',
        height: 100,
        backgroundColor: 'red'
    },
    lowerRow: {
        flexDirection: 'row',
        marginTop: 10,
        margin: 20
    },
    lowerItem: {
        flex: 1, 
        height: 100,
        backgroundColor: 'blue',
        margin: 10,
    }
})
