import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

const AppointmentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You are on Appointment Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          React Native Bottom Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        ></Text>
      </View>
    </SafeAreaView>
  );
};
export default AppointmentScreen;
