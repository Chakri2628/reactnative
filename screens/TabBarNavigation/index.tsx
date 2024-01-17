import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../DashboardScreen';
import ProfileScreen from '../ProfileScreen';
import EmployeeScreen from '../EmployeeScreen';
import ExpensesScreen from '../ExpensesScreen';
const Dashboard = 'Homescreen';
const Profile = 'Profile';
const Employee = 'Employee';
const Expenses = 'Expenses';

const Tab = createMaterialTopTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={Dashboard}
      tabBarPosition="bottom"

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-analytics' : 'ios-analytics-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Employee') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          } else if (route.name === 'Expenses') {
            iconName = focused ? 'ios-cash' : 'ios-cash-outline';
          } else if (route.name === 'Homescreen') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 7, fontWeight: 'bold' }, 
        style: { padding: 10 },
        showIcon: true,
        showLabel: true,
        
      }}>
      
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Employee" component={EmployeeScreen} />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
    </Tab.Navigator>
  );
}
 