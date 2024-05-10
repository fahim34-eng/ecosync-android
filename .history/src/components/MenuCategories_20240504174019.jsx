import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function MenuCategories({ navigation }) {
    const categories = [
        // {
        //     id : 1,
        //     name : 'Live Data',
        //     url : require('../assets/live.png')
        // }
      ]

    function handleCategoryPress(categoryId) {
        if (categoryId == 2) navigation.navigate('Statistics');
    };
  return (
    <View style = {styles.container}>
        {/* Heading Section */}
      <View style = {styles.headingContainer}>
        <Text style = {styles.informationStyle}>
            Information Categories :
        </Text>
      </View>

      {/* Categories */}
      <View style = {{ marginTop : 10 }}>
        <FlatList 
            data = {categories}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    onPress={() => handleCategoryPress(item.id)}
                    style={styles.sliderContainer}
                >
                    <View style={styles.sliderContainer}>
                        <View style = {styles.imageContainer}>
                            <Image source={item.url} style = {styles.sliderImage} />
                        </View>
                        <Text style = {styles.sliderText }>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    informationStyle : {
        fontWeight : '400',
        fontSize : 16,
    },
    container : {
        paddingVertical : 7,
        paddingHorizontal : 5,
        marginTop : 5,
    },
    headingContainer : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    sliderImage : {
        width : 52,
        height : 52,
        objectFit : "contain",
        borderRadius : 8,
        marginHorizontal : 5,
    },
    sliderText : {
        color : '#111',
        fontWeight : '300',
        marginVertical : 5,
        fontSize : 12,
        textAlign : 'center',
    },
    sliderContainer : {
        flex : 1,
        alignItems : 'center',
        gap : 5,
        marginBottom : 5,
    },
    imageContainer : {
        backgroundColor : '#edebeb',
        borderRadius : 99,
        padding : 10,
    }
})