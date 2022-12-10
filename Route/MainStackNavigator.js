import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Src/screen/HomeScreen';
import Login from '../Src/screen/Auth/Login';
import Register from '../Src/screen/Auth/SignUp';
import TeacherBio from '../Src/screen/Teacher/TeacherBio';
import Ratings from '../Src/screen/Teacher/Ratings';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="regis" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="teacher" component={TeacherBio} options={{headerShown:false}} />
        <Stack.Screen name="rate" component={Ratings} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}