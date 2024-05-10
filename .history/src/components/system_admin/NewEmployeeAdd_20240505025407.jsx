import React, { useRef } from 'react'
import { Button, FormControl, Input, Modal, HStack } from "native-base";
import tw from "twrnc";
import { TextInput } from 'react-native';

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
    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={() => {
                setModalVisible(false);
              }}>
                  Save
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