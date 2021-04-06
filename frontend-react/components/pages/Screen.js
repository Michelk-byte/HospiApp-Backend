import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./Home/HomeStack";
import LabReserStack from "./LabReservation/LabReserStack";
import HospiStack from "./Hospital/HospiStack";
import SettingsStack from "./Setting/SettingsStack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Screen({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HospiStack"
      tabBarOptions={{
        activeTintColor: "red",
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
        name="HospiStack"
        component={HospiStack}
        options={{
          tabBarLabel: "Appointment",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hospital-box"
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
            <Fontisto name="injection-syringe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="md-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Screen;
