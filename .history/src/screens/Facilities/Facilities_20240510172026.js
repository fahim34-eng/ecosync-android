import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../../components/system_admin/Map'
import FacilityMap from '../../components/ui/FacilityMap'
export default function Facilities() {
  return (
    <View style={{ display : "flex", justifyContent: "center"}}>
      <Text style={tw`py-4 text-center`}>Check Your Nearest Recycling Facilities</Text>
      <FacilityMap />
    </View>
  )
}

