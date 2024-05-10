import React, { useRef, useState } from 'react'
import { Button, FormControl, Input, Modal, HStack } from "native-base";
import tw from "twrnc";
import { TextInput, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINT } from '../../../GlobalVariables';

export default function DeleteEmployee() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = useRef(null);
    const finalRef = useRef(null);

    async function handleDelete() {
        setModalVisible(false);
        const token = await AsyncStorage.getItem("token");
          if (!token) {
            ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
            return;
          }
          const parsedToken = JSON.parse(token);
          
          const response = await fetch(`${ENDPOINT}/users`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + parsedToken.accessToken,
              "ngrok-skip-browser-warning": "69420"
            },
          });
          const data = await response.json();
          if (data.detail === "Unauthorized") {
            ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
          }
          else {
            ToastAndroid.show("Employee Deleted Successfully", ToastAndroid.SHORT);
          }
    }

    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content style={tw`w-[380px]`}>
            <Modal.CloseButton />
            <Modal.Body>
                <FormControl>
                    <FormControl.Label>Are you sure you want to delete this employee?</FormControl.Label>
                </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={handleDelete} style={tw`bg-[#F00]`} >
                  Yes
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <HStack space="4" justifyContent="center" alignItems="center">
          <Button style={tw`bg-red-800 text-white`} onPress={() => {
            setModalVisible(!modalVisible);
          }}>
           Delete Employee
          </Button>
        </HStack>
      </>;
  }