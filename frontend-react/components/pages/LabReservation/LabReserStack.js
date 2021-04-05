import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LabReserScreen from "./LabReserScreen";
import AppointmentScreen from "../AppointmentScreen";

const Stack = createStackNavigator();

const ShoppingCartIcon = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="calendar"
        size="35px"
        style={{
          marginRight: "20px",
        }}
        onPress={() => navigation.navigate("AppointmentScreen")}
      />
    </View>
  );
};

export default function LabReserStack() {
  return (
    <Stack.Navigator
      initialRouteName="LabReserScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="LabReserScreen"
        component={LabReserScreen}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
