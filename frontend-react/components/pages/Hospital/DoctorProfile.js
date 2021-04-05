import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const DoctorProfile = ({ navigation }) => {
  return (
    <ScrollView>
      <CardViewWithImage
        width={"96%"}
        source={require("../../../assets/doctor1.jpeg")}
        ima
        content={"Dr A is the best accross town and ...."}
        title={"Dr A - Allergy"}
        imageWidth={"100%"}
        imageHeight={400}
        roundedImage={false}
      />
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: "10px",
          marginRight: "10px",
        }}
        title="Timing"
        description="Monday - Wednesday - Friday 12am -> 4pm"
        left={(props) => <List.Icon {...props} icon="clock" />}
      />
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "5px",
        }}
        title="Fee"
        description="100 000L.L/session"
        left={(props) => <List.Icon {...props} icon="cash" />}
      />

      <Button
        icon={<FontAwesome name="stethoscope" color="#ffffff" size="20px" />}
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 0,
          marginRight: 0,
          marginTop: "10px",
          marginBottom: 0,
          backgroundColor: "red",
        }}
        title="BOOK AN APPOINTMENT"
        titleStyle={{ marginLeft: 10, fontSize: 15 }}
      />
    </ScrollView>
  );
};
export default DoctorProfile;
