import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Forgot_Password from '../screens/Forgot_Password';
import AppSetting from '../screens/AppSetting';




const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{ headerShown: false}} initialRouteName="AppSetting">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
        <Stack.Screen name="AppSetting" component={AppSetting} />
       
      



      </Stack.Navigator>
    </NavigationContainer>
  );
}
