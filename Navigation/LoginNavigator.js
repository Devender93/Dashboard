import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Forgot_Password from '../screens/Forgot_Password';
import AppSetting from '../screens/AppSetting';
import OurBuyer from '../screens/OurBuyer';
import OurSeller from '../screens/OurSeller';
import Profile from '../screens/Profile';
import Messages from '../screens/Messages';
import help from '../screens/help';
import FAQ from '../screens/FAQ';
import Testimonial from '../screens/Testimonial';
import OurStory from '../screens/OurStory';
import splash from '../screens/splash';
import Work from '../screens/Work';
import EditProfile from '../screens/EditProfile';




const Stack = createStackNavigator();
export default function LoginNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{ headerShown: false}} initialRouteName="Work">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
        <Stack.Screen name="AppSetting" component={AppSetting} />
        <Stack.Screen name="OurBuyer" component={OurBuyer} />
        <Stack.Screen name="OurSeller" component={OurSeller} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="help" component={help} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Testimonial" component={Testimonial} />
        <Stack.Screen name="OurStory" component={OurStory} />
        <Stack.Screen name="splash" component={splash} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
       
      



      </Stack.Navigator>
    </NavigationContainer>
  );
}
