import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppointmentScreen from "./AppointmentScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppointmentScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{ title: "AppointmentScreen" }}
      />
    </Stack.Navigator>
  );
}
