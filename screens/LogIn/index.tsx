import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        // 'http://106.51.52.207:8095/hrdome/users/login',
        'http://192.168.88.110:8009/hrdome/users/login',

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.status === true) {
        Alert.alert('Login Successful', 'Welcome!');
        navigation.navigate('DashboardScreen');


         setUserName('');
      setPassword('');
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert(
        'Error',
        'An error occurred during login. Please try again.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.label}>UserName</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={userName}
              onChangeText={setUserName}
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', 
  },
  loginContainer: {
    width: 300,
    padding: 20,
    borderWidth: 2,
    borderColor: '#b3e0f2',
    borderRadius: 10,
    backgroundColor: '#fff', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    color: '#00796b', 
    letterSpacing: 3,
    fontWeight: '500',
    marginBottom: 20,
    fontSize: 20,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formItem: {
    marginVertical: 10,
  },
  label: {
    color: '#00796b', 
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#b3e0f2', 
    color: '#00796b', 
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff', 
  },
  button: {
    width: 200,
    height: 40,
    marginTop: 20,
    backgroundColor: '#29b6f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
  },
});

export default Login;
