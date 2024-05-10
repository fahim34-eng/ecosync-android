import { Box, HStack, IconButton, Stagger, useDisclose } from "native-base";
import { Icon } from "react-native-paper";

export default function StackedElement() {
    const {
      isOpen,
      onToggle
    } = useDisclose();
    return <Box>
        <Box alignItems="center">
          <Stagger visible={isOpen} initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }} animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }} exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}>
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" 
            icon={<Icon source="menu" color={MD3Colors.error50} size={32}/>} />
            
            <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon source="menu" color={MD3Colors.error50} size={32}/>} />
            
          </Stagger>
        </Box>
        <HStack justifyContent="center">
          <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
          color: 'warmGray.50'
        }} />} />
        </HStack>
      </Box>;
  };