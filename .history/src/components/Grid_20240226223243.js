import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import mapstyle from "../mapstyle.json"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENDPOINT } from "../../GlobalVariables";
import { getAbsoluteLoadValue, getControlModuleVoltage, getDistanceTraveledSinceCodesCleared, getDistanceTraveledWithMILOn, getEngineCoolantTemperature, getEngineSpeed, getFuelPercentage, getIntakeAirTemperature, getNoOfWarmUpsSinceCodesCleared, getTimeRunWithMILOn, getTimeSinceDTCCodesCleared, getTimeSinceEngineStart, getVehicleSpeed } from "../utility_functions/obd_requests";

export default function Grid() {
  const [location, setLocation] = useState({});
  const [mapLoading, setMapLoading] = useState(false);
  const [stat, setStat] = useState({});
  const [statLoading, setStatLoading] = useState(false);
  const [data, setData] = useState({
    engine_speed : "0 rpm",
    vehicle_speed : "0 km/h",
    fuel_percentage : "0 %",
    absolute_load_value : "0 %",
    engine_coolant_temperature : "0°C",
    intake_air_temperature : "0 Kpa",
    control_module_voltage : "0 V",
    run_time_since_engine_start : "0 seconds",
    distance_traveled_with_MIL_on: "0 Km",
    no_of_warm_ups_since_DTC_codes_cleared : "0 times",
    distance_traveled_since_DTC_codes_cleared : "0 Km",
    time_run_with_MIL_on : "0 minute",
    time_since_trouble_codes_cleared : "0 minute",
  })
  const [latitude, setLatitude] = useState(23.7270478)
  const [longitude, setLongitude] = useState(90.4031032)  

  useEffect(() => {
    const device = AsyncStorage.getItem("device");
    const locationData = fetch(`${ENDPOINT}/api/info/location/${1}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(data => data.json()
      ).then(data => {
      // setLatitude(data.latitude)
      // setLongitude(data.longitude)
      console.log(data)
    })
    
  }, [])


  // useEffect(() => {
  //   const device = AsyncStorage.getItem("device");
  //   const primaryInfo = fetch(`${ENDPOINT}/api/info/primary/${1}`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   }).then(data => data.json()
  //     ).then(data => {
  //     setData(data)
  //     console.log(data)
  //   })
  // }, [])


  useEffect(() => {
    getEngineSpeed(setData)
    getVehicleSpeed(setData)
    getFuelPercentage(setData)
    getEngineCoolantTemperature(setData)
    getIntakeAirTemperature(setData)
    getAbsoluteLoadValue(setData)
    getControlModuleVoltage(setData)
    getTimeSinceDTCCodesCleared(setData)
    getTimeRunWithMILOn(setData)
    getNoOfWarmUpsSinceCodesCleared(setData)
    getDistanceTraveledSinceCodesCleared(setData)
    getTimeSinceEngineStart(setData)
    getDistanceTraveledWithMILOn(setData)
  }, [])

  function dataRefreshHandler() {
    getEngineSpeed(setData)
    getVehicleSpeed(setData)
    getFuelPercentage(setData)
    getEngineCoolantTemperature(setData)
    getIntakeAirTemperature(setData)
    getAbsoluteLoadValue(setData)
    getControlModuleVoltage(setData)
    getTimeSinceDTCCodesCleared(setData)
    getTimeRunWithMILOn(setData)
    getNoOfWarmUpsSinceCodesCleared(setData)
    getDistanceTraveledSinceCodesCleared(setData)
    getTimeSinceEngineStart(setData)
    getDistanceTraveledWithMILOn(setData)
  }
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={tw`flex-1 flex pb-5 bg-gray-100`}
      onMomentumScrollBegin={dataRefreshHandler}
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            paddingTop: 5,
          }}
        >
          Real-time Vehicle Tracker
        </Text>
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          marginVertical: 8,
        }}
      >
       <MapView
          style={{
            height: 220,
            width: Dimensions.get("window").width - 20,
            borderRadius: 30,
            overflow: "hidden",
          }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapstyle}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title="Your Car"
            description="Dhaka, Bangladesh"
          />
        </MapView>                              
      </View>
    </View>
    

      <>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          paddingTop: 5,
        }}
      >
        Vehicle Statistics
      </Text>
      {data &&
        <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",

          paddingHorizontal: 16,
          backgroundColor: "#eee",
          paddingVertical: 10,
          marginHorizontal: 10,
          marginVertical: 8,
          borderRadius: 10,
          // gap: 5,
          width: Dimensions.get("window").width - 20,
        }}
      >
        {Object.keys(data).map((key, index) => {
          return (
            <View
              key={index}
              style={tw`bg-[#ffffff] my-3 shadow-lg py-2 px-4 rounded-lg w-[47%]`}
            >
              <Text style={tw`text-left text-gray-500 text-sm`}>
                {key
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Text>
              <Text style={tw`text-2xl text-gray-600 font-bold`}>{data[key]}</Text>
            </View>
          );
        })}
      </View>}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

