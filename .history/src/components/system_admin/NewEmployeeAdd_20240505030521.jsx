import React, { useRef, useState } from 'react'
import { Button, FormControl, Input, Modal, HStack } from "native-base";
import tw from "twrnc";
import { TextInput, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINT } from '../../../GlobalVariables';

export default function NewEmployeeAdd() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [place, setPlace] = useState("")
    const [imageData, setImageData] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)


    async function handleRegister() {
        setModalVisible(false);
        const token = await AsyncStorage.getItem("token");
          if (!token) {
            ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
            return;
          }
          const parsedToken = JSON.parse(token);
          const response = await fetch(`${ENDPOINT}/users`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + parsedToken.accessToken,
              "ngrok-skip-browser-warning": "69420"
            }
          });
          const data = await response.json();
          if (data.detail === "Unauthorized") {
            ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
          }
          else {
            console.log(data)
            ToastAndroid.show("Employee Added Successfully", ToastAndroid.SHORT);
          }
    }

    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content style={tw`w-[350px]`}>
            <Modal.CloseButton />
            <Modal.Header>Add New Employee</Modal.Header>
            <Modal.Body>
                <TextInput
                    style={tw`bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300 mb-4`}
                    placeholder="Enter Employee Name"
                    onChangeText={setName}
                />

                <TextInput
                    style={tw`bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300 mb-4`}
                    placeholder="Enter Employee Email"
                    onChangeText={setEmail}
                />

                <TextInput
                    style={tw`bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300 mb-4`}
                    placeholder="Enter Employee Contact Number"
                    onChangeText={setPhone}
                />

                <TextInput
                    style={tw`bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300`}
                    placeholder="Enter Employee Password"
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={tw`bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300 mb-4`}
                    placeholder="Enter Employee Place"
                    onChangeText={setPlace}
                />

            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={handleRegister} style={tw`bg-[#0A5F59]`} >
                  Done
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <HStack space="4" justifyContent="center" alignItems="center">
          <Button style={tw`bg-[#0A5F59] mb-8`} onPress={() => {
            setModalVisible(!modalVisible);
          }}>
           Add New Employee
          </Button>
        </HStack>
      </>;
  }