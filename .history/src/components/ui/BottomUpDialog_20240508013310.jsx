import { Actionsheet, Box, Text, useDisclose } from "native-base";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'; 

export default function BottomUpDialog() {
    const { isOpen, onOpen, onClose } = useDisclose();
    const navigation = useNavigation(); 
    const handleMenuItemPress = (screenName) => {
        navigation.navigate(screenName);
        onClose();
    };

    return <>
        <Button onPress={onOpen} shadow={2} style={styles.button} >
            Click
        </Button>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
                <Text fontSize="16" color="gray.500" _dark={{
                color: "gray.300"
            }}>
                Albums
                </Text>
            </Box>
            <Actionsheet.Item onPress={() => handleMenuItemPress("LoginScreen")} >Login</Actionsheet.Item>
            <Actionsheet.Item>Share</Actionsheet.Item>
            <Actionsheet.Item>Play</Actionsheet.Item>
            <Actionsheet.Item>Favourite</Actionsheet.Item>
            <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    </>;
  }

const styles = StyleSheet.create({
    button : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});