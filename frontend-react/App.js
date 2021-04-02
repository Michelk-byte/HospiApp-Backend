import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import Login from "./components/Login/LoginPage";
import Signup from "./components/Login/SignupPage";
import Screen from "./components/pages/Screen";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getCookie } from "./cookies.js";
const Stack = createStackNavigator();

function App() {
  let initial_route = "Home";

  let sid = getCookie("sid");

  if (sid !== "") {
    initial_route = "Screen";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initial_route}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
  },
});

export default App;
