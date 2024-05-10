import React, { useRef } from 'react'
import { Button, FormControl, Input, Modal, HStack } from "native-base";
export default function NewEmployeeAdd() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
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
          <Button style={{ backgroundColor : "#0A5F59"}} onPress={() => {
            setModalVisible(!modalVisible);
          }}>
           Add New Employee
          </Button>
        </HStack>
      </>;
  }