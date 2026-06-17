import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";

import LoginScreen from "../pages/Login/LoginPageScreen";
import SignupScreen from "../pages/Login/SignInPageScreen";
import ForgotPasswordScreen from "../pages/Login/ForgotPasswordScreen";
import ResetPasswordScreen from "../pages/Login/ResetPasswordScreen";
import HomeScreen from "../pages/Home/HomeScreen";
import DestinationScreen from "../pages/Destination/DestinationScreen";
/* import HotelDetailsScreen from "../pages/Hotel/HotelDetailsScreen"; */

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Home: undefined;
  Destination: {
    destinationId: string;
  };
  /* HotelDetails: undefined; */
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}