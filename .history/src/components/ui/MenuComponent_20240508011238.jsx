import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation
import { Icon, MD3Colors } from 'react-native-paper';

const MenuComponent = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleMenuItemPress = (screenName) => {
    navigation.navigate(screenName); // Navigate to the specified screen
    closeMenu(); // Close the menu after navigation
  };

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>
            <Icon
              source="camera"
              color={MD3Colors.error50}
              size={20}
            />
          </Button>}>
          <Menu.Item onPress={() => handleMenuItemPress('Login')} title="Login" />
          <Menu.Item onPress={() => handleMenuItemPress('SignUpScreen')} title="Registration" />
          <Divider />
          <Menu.Item onPress={() => handleMenuItemPress('TabNavigator')} title="Home" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuComponent;
