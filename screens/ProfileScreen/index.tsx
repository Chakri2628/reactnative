import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login'); 
  };
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
