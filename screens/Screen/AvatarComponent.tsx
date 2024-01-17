
import React from 'react';
import { Avatar } from 'react-native-elements';

const AvatarComponent = ({ userName, size }) => {
  const getAvatarTitle = () => {
    if (userName && userName.length > 1) {
      return `${userName[0]}${userName.slice(-1)}`;
    }
    return userName;
  };

  return (
    <Avatar
      rounded
      size={size}
      title={getAvatarTitle()}
    />
  );
};

export default AvatarComponent;
