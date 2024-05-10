import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import { Icon, MD3Colors } from 'react-native-paper';
const MenuComponent = () => {
  const navigation = useNavigation(); 
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleMenuItemPress = (screenName) => {
    navigation.navigate(screenName);
    closeMenu(); 
  };

  return (
    <Provider>
      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Icon
            source="menu"
            color={MD3Colors.error50}
            size={32}
            onPress={openMenu}
          />}>
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
