import * as React from "react";
import { Image, Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import Hospital from "./Hospital";
import Doctor from "./Doctor";
import AppointmentScreen from "../AppointmentScreen";
import DoctorProfile from "./DoctorProfile";

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

export default function HospiStack() {
  return (
    <Stack.Navigator
      initialRouteName="Hospital"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Hospital"
        component={Hospital}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
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
