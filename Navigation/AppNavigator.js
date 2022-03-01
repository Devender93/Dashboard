import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';




const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{ headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
       
      



      </Stack.Navigator>
    </NavigationContainer>
  );
}
