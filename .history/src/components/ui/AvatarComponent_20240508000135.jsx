import * as React from 'react';
import { Avatar } from 'react-native-paper';

const AvatarComponent = () => (
  <Avatar.Image size={72} source={require('../../assets/default.jpg')} />
);
export default AvatarComponent