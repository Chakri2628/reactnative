

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Avatar, ListItem } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker';
import ProfileScreen from '../ProfileScreen';
import EmployeeScreen from '../EmployeeScreen';
import ExpensesScreen from '../ExpensesScreen';

import MainContainer from '../TabBarNavigation';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={MainContainer}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const LeftNavigation = ({ navigation }) => {
  const dropdownItems = [
    { label: 'Profile', value: 'Profile' },
    { label: 'Logout', value: 'Logout' },
    { label: 'Change Password', value: 'ChangePassword' },
  ];

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <React.Fragment>
          <View style={styles.drawerHeader}>
            <Avatar
              size="medium"
              containerStyle={styles.avatar}
            />
            <Text style={{ color: 'white', fontSize: 10 }}>baby</Text>
          </View>
          <DropDownPicker
            items={dropdownItems}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: '#fafafa' }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => {
              if (item.value === 'Profile') {
                navigation.navigate('Profile');
              } else if (item.value === 'Logout') {
                // Handle logout
              } else if (item.value === 'ChangePassword') {
                navigation.navigate('ChangePasswordScreen');
              }
            }}
          />
            <ListItem
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Dashboard</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Profile</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        
          <ListItem
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Employee');
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Employee</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Expenses');
            }}
          >
            <ListItem.Content>
              <ListItem.Title>Expenses</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </React.Fragment>
      )}
    >
      <Drawer.Screen name="DashboardScreen" component={DashboardStack} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="EmployeeScreen" component={EmployeeScreen} />
      <Drawer.Screen name="ExpensesScreen" component={ExpensesScreen} />
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',
  },
  avatar: {
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default LeftNavigation;
