// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, Pressable, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Image, Button, ToastAndroid } from "react-native";
import tw from "twrnc";
import React, { useLayoutEffect, useState } from 'react'
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENDPOINT } from "../../../GlobalVariables";
import { StyleSheet } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ScrollView } from "react-native";
import { convertImageToBase64 } from "../../utility_functions/image";
import { SelectTopic } from "../../components/ui/SelectTopic";
import AnonymousPostSelect from "../../components/ui/AnonymousPostSelect";
import { useNavigation } from "@react-navigation/native";

const PostIssue = ({ navigation }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [topic, setTopic] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [postAnonymously, setPostAnonymously] = useState(false);


  async function signUpHandler() {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
      return;
    }
    console.log(token)
    const parsedToken = JSON.parse(token);

    const bodyData = {
      type: topic,
      description: description,
      image_data : imageData ? "data:image/jpeg;base64," + imageData : null, 
      url : image ? image : "default.jpg",
      is_anonymous : postAnonymously,
    };
    const response = await fetch(`${ENDPOINT}/citizen/issue/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization" : "Bearer " + parsedToken.accessToken,
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    if (data.detail === "Unauthorized") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "You are not authorized",
      });
    } else {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Account Created Successfully",
      });
      
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
    setImageData(result.assets[0].base64);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
      <Toast />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={tw`mx-5 my-auto flex flex-col justify-center`}>
            <Text style={tw`text-3xl font-bold text-center mt-10`}>Post an Issue</Text>
          <View style={tw`flex-col gap-y-5 mt-12`}>
            <View style={styles.container}>
              {image && <Image source={{ uri : image }} style={tw`w-32 h-32 rounded-full mb-4`} />}
              <Button title="Add Photo" onPress={pickImage} />
            </View>
            <SelectTopic topic={topic} setTopic={setTopic} />
            <TextInput
              style={tw`bg-gray-100 p-4 rounded-lg shadow-sm`}
              placeholder="Write A Description"
              onChangeText={setDescription}
            ></TextInput>
            <AnonymousPostSelect postAnonymously={postAnonymously} setPostAnonymously={setPostAnonymously}/>
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
                Post
              </Text>
            )}
          </Pressable>
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

  });


export default PostIssue