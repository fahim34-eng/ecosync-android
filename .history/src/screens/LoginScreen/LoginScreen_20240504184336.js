// eslint-disable-next-line prettier/prettier
import { View, Text, Pressable, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ActivityIndicator, StyleSheet, Image } from "react-native";
import { API, ENDPOINT } from "../../../GlobalVariables";
import React, { useLayoutEffect, useState } from 'react'
import tw from "twrnc";
import Toast from "react-native-toast-message";
import * as Keychain from 'react-native-keychain';

const LoginScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  async function signInHandler() {
    if (!email) {
      Toast.show({
        type: "error",
        text1: "Invalid Information",
        text2: "This Field Cannot Be Empty",
        autoHide: true,
        topOffset: 10,
      });
    } else if (!password) {
      Toast.show({
        type: "error",
        text1: "Invalid Password",
        text2: "This field cannot be empty",
        autoHide: true,
        topOffset: 10,
      });
    } else {
      const response = await fetch(`${ENDPOINT}/auth/login`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email : email,
            password : password,
          }),
        });
        const data = await response.json();
        if (data.response != "error") {
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Logged in successfully",
            autoHide: true,
            topOffset: 10,
          });
          await Keychain.setGenericPassword("JSON.stringify(data)", "password");
          // const credentials = await Keychain.getGenericPassword();
          // setName(credentials.username);
          
        } else {
          Toast.show({
            type: "error",
            text1: "Invalid Information",
            text2: "Please check your email and password",
            autoHide: true,
            topOffset: 10,
          });
        }
    }
    
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
      <Toast/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`mx-5 my-auto`}>
          <View style={tw`flex items-center flex-row justify-center`}>
            <Image source={require('../../assets/eco.png')} style={styles.item}></Image>
            <Text style={tw`text-center text-3xl font-bold text-[#0A5F59]`}>EcoSync</Text>
          </View>
          <View style={tw`flex-col gap-y-5 mt-12`}>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Enter Your Email"
              onChangeText={setEmail}
            ></TextInput>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Enter Your Password"
              onChangeText={setPassword}
              secureTextEntry
            ></TextInput>
          </View>
          <Pressable
            style={tw`bg-black p-4 rounded-2xl mt-10 shadow-md bg-[#0A5F59]`}
            onPress={signInHandler}
          >
            {loading ? (
              <View style={tw`flex-1 justify-center p-4`}>
                <ActivityIndicator size="large" color="#ffffff" />
              </View>
            ) : (
              <Text style={tw`text-white font-bold text-lg text-center`}>
                Sign in
              </Text>
            )}
          </Pressable>
          <Text style={tw`text-black font-bold text-lg text-center`}>
              {name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 52,
    height: 52,
    aspectRatio: 1,
  },
  });

export default LoginScreen