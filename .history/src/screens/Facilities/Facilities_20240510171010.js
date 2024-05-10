import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../../components/system_admin/Map'
export default function Facilities() {
  return (
    <View>
      <Text style={tw`py-4 text-center`}>Check Your Nearest Recycling Facilities</Text>
      <Map />
    </View>
  )
}

