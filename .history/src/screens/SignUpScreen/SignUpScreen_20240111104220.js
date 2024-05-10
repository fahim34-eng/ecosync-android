// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import React, { useLayoutEffect, useState } from 'react'
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENDPOINT } from "../../../GlobalVariables";


const SignUpScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpHandler() {
    if (!name) {
      Toast.show({
        type: "error",
        text1: "Invalid Name",
        text2: "This field cannot be empty",
        autoHide: true,
        topOffset: 10,
      });
    } else if (!phone) {
      Toast.show({
        type: "error",
        text1: "Invalid Contact Number",
        text2: "This field cannot be empty",
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
    } else if (!cpassword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Password Do Not Match",
        autoHide: true,
        topOffset: 10,
      });
    } else {
      if (password == cpassword) {
          const response = await fetch(`${ENDPOINT}/api/users/register`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name : phone,
              phone : phone,
              password : password,
            }),
          });
          const data = await response.json();
          console.log(data);
          navigation.navigate("Verify");
      } else {
        Toast.show({
          type: "error",
          text1: "Validation Error",
          text2: "Some Error Ocurred",
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
      <Toast />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`mx-5 my-auto`}>
          <Text style={tw`text-left`}>Welcome</Text>
          <Text style={tw`text-left text-3xl font-bold`}>Sign Up</Text>
          <View style={tw`flex-col gap-y-5 mt-12`}>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Your Name"
              onChangeText={setName}
            ></TextInput>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Your Contact Number"
              onChangeText={setPhone}
            ></TextInput>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Your Password"
              onChangeText={setPassword}
              secureTextEntry
            ></TextInput>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Confirm Your Password"
              onChangeText={setCpassword}
              secureTextEntry
            ></TextInput>
          </View>
          <Pressable
            style={tw`bg-black p-4 rounded-2xl mt-10 shadow-md`}
            onPress={signUpHandler}
          >
            {loading ? (
              <View style={tw`flex-1 justify-center p-4`}>
                <ActivityIndicator size="large" color="#ffffff" />
              </View>
            ) : (
              <Text style={tw`text-white font-bold text-lg text-center`}>
                Create Account
              </Text>
            )}
          </Pressable>
          <View style={tw`flex-row justify-between mt-4 mx-2`}>
            <Text>Already have an account?</Text>
              <Pressable>
                <Text style={tw`font-bold text-blue-500`} onPress={() => navigation.navigate("Login")}>Sign In</Text>
              </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen