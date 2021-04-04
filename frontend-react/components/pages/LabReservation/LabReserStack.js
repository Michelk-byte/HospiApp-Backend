import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LabReserScreen from "./LabReserScreen";

const Stack = createStackNavigator();

export default function LabReserStack() {
  return (
    <Stack.Navigator
      initialRouteName="LabReserScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="LabReserScreen"
        component={LabReserScreen}
        options={{ title: "Lab Reservation Page" }}
      />
    </Stack.Navigator>
  );
}
