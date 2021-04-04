import * as React from "react";
import { Image, Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import AppointmentScreen from "./AppointmentScreen";

const Stack = createStackNavigator();

const ShoppingCartIcon = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="calendar"
        size="35px"
        style={{
          marginRight: "20px",
        }}
      />
    </View>
  );
};

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppointmentScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon />,
        })}
      />
    </Stack.Navigator>
  );
}
