import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./Home/HomeStack";
import LabReserStack from "./LabReservation/LabReserStack";
import AppoinStack from "./Appointment/AppoinStack";
import SettingsStack from "./Setting/SettingsStack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Screen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#42f44b",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AppoinStack"
        component={AppoinStack}
        options={{
          tabBarLabel: "Appointment",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="appointment"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LabReserStack"
        component={LabReserStack}
        options={{
          tabBarLabel: "LabReservation",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lab" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Screen;
