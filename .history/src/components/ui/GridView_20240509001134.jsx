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
            <View style={{...styles.lowerItem }}>
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
        width: '95%',
        height: 200,
        marginHorizontal: 100,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 1,
        
    },
    lowerRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    lowerItem: {
        flex: 1, 
        height: 150,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
    }
})
