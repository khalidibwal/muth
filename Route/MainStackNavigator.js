import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "../Src/screen/HomeScreen";
import Login from "../Src/screen/Auth/Login";
import Register from "../Src/screen/Auth/SignUp";
import TeacherBio from "../Src/screen/Teacher/TeacherBio";
import Ratings from "../Src/screen/Teacher/Ratings";
import AllData from "../Src/screen/History/AllData";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ImageHeader = () => (
  <View style={{ backgroundColor: "#eee", height: 100 }}>
    <TouchableOpacity>
      <Ionicons
        size={20}
        name="notifications-outline"
        color={"black"}
        style={Styles.notifIcon}
      />
    </TouchableOpacity>
  </View>
);

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen name="homescreen" component={HomeScreen} options={{
        tabBarLabel: ({ focused }) => {
          return <Text style={Styles.labelFont}>Home</Text>;
        },
        headerShown: false,
      }}/>
      <Tab.Screen name="History" component={AllData} options={{
        tabBarLabel: ({ focused }) => {
          return <Text style={Styles.labelFont}>History</Text>;
        },
        headerShown: false,
      }}/>
    </Tab.Navigator>
  );
}

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="regis"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={MyTabs}
          options={{ header: () => {return <ImageHeader />} }}
        />
        <Stack.Screen
          name="teacher"
          component={TeacherBio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="rate"
          component={Ratings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="alldata"
          component={AllData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  notifIcon: {
    alignSelf: "flex-end",
    right: 30,
    top: 50,
  },
  labelFont: {
    textTransform: "uppercase",
    fontSize: 7,
    marginBottom: 4,
  },
})