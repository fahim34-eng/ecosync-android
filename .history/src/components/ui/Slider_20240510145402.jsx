import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function Slider() {
  const sliders = [
    {
        id : 1,
        name : 'Info 1',
        url : require('../assets/all_data.jpg')
    },
    {
        id : 2,
        name : 'Info 1',
        url : require('../assets/live_data.jpg')
    },
    {
        id : 3,
        name : 'Info 1',
        url : require('../assets/trouble_codes.jpg')
    }
  ]
  return (
    <View style = {styles.container}>
      <View style = {styles.sliderContainer}>
        <FlatList 
            data = {sliders}
            keyExtractor={item => item.id.toString()}
            horizontal = {true}
            renderItem={({item, index}) => (
                <View>
                    <Text style = {styles.sliderText }>{item.name}</Text>
                    <Image source={item.url} style = {styles.sliderImage} />
                </View>
            )}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    headerText : {
        fontSize : 16,
        padding : 4,
    },
    sliderImage : {
        width : 270,
        height : 150,
        objectFit : "contain",
        borderRadius : 8,
        marginHorizontal : 5,
    },
    container : {
        paddingHorizontal : 5,
    },
    sliderText : {
        color : '#111',
        fontWeight : '300',
        marginVertical : 5,
        fontSize : 16,
    },
    sliderContainer : {
        marginTop : 5
    }
})