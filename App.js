import React, { useState } from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./screens/TabBarNavigation";
import Login from "./screens/LogIn";
import MainContainer from "./screens/TabBarNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userName, navigation) => {
    setLoggedInUser(userName);
    navigation.dispatch(DrawerActions.replace("DashboardScreen"));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{ handleLogin }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={MainContainer}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
