// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, Pressable, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Image, Button } from "react-native";
import tw from "twrnc";
import React, { useLayoutEffect, useState } from 'react'
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENDPOINT } from "../../../GlobalVariables";
import { StyleSheet } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ScrollView } from "react-native";

const SignUpScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  async function signUpHandler() {
    if (name == "" || phone == "" || password == "" || email == "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill all the fields",
      });
      return;
    }
  };

  const pickImage = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 200,
      maxWidth: 200,
    });
    setImage(result.assets[0].uri);
    console.log(image)
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
      <Toast />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={tw`mx-5 my-auto flex flex-col justify-center`}>
          <View style={tw`flex items-center flex-row justify-center`}>
            <Image source={require('../../assets/eco.png')} style={styles.item}></Image>
            <Text style={tw`text-center text-3xl font-bold text-[#0A5F59]`}>EcoSync</Text>
          </View>
          <View style={tw`flex-col gap-y-5 mt-12`}>
            <View style={styles.container}>
              <Button title="Pick an image from Gallery" onPress={pickImage} />
              {image && <Image source={{ uri : image }} style={styles.item} />}
            </View>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Your Name"
              onChangeText={setName}
            ></TextInput>
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Your Email Address"
              onChangeText={setEmail}
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
          </View>
          <Pressable
            style={tw`bg-black p-4 rounded-2xl mt-10 shadow-md bg-[#0A5F59]`}
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
        </ScrollView>
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
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "full",
  }
  });


export default SignUpScreen