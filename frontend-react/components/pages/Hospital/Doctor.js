import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Doctor = ({ navigation }) => {
  return (
    <ScrollView>
      <Card containerStyle={{ width: "60%", marginLeft: "20%" }}>
        <Card.Title>Dr. A - Allergy and Immunology</Card.Title>
        <Card.Divider />
        <Card.Image
          containerStyle={{ maxheight: "1000000000000" }}
          source={require("../../../assets/doctor1.jpeg")}
        ></Card.Image>
        <Card.Divider />
        <View style={{ width: "100%", alignItems: "center" }}>
          <Button
            icon={
              <FontAwesome name="stethoscope" color="#ffffff" size="20px" />
            }
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "red",
            }}
            title="BOOK AN APPOINTMENT"
            titleStyle={{ marginLeft: 10, fontSize: 15 }}
          />
        </View>
      </Card>

      <Card containerStyle={{ width: "60%", marginLeft: "20%" }}>
        <Card.Title>Dr. B - Anesthesiology</Card.Title>
        <Card.Divider />
        <Card.Image
          containerStyle={{ maxheight: "1000000000000" }}
          source={require("../../../assets/doctor2.jpeg")}
        ></Card.Image>
        <Card.Divider />
        <View style={{ width: "100%", alignItems: "center" }}>
          <Button
            icon={
              <FontAwesome name="stethoscope" color="#ffffff" size="20px" />
            }
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "red",
            }}
            title="BOOK AN APPOINTMENT"
            titleStyle={{ marginLeft: 10, fontSize: 15 }}
          />
        </View>
      </Card>

      <Card containerStyle={{ width: "60%", marginLeft: "20%" }}>
        <Card.Title>Dr. C - Dermatology</Card.Title>
        <Card.Divider />
        <Card.Image
          containerStyle={{ maxheight: "1000000000000" }}
          source={require("../../../assets/doctor3.jpeg")}
        ></Card.Image>
        <Card.Divider />
        <View style={{ width: "100%", alignItems: "center" }}>
          <Button
            icon={
              <FontAwesome name="stethoscope" color="#ffffff" size="20px" />
            }
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "red",
            }}
            title="BOOK AN APPOINTMENT"
            titleStyle={{ marginLeft: 10, fontSize: 15 }}
          />
        </View>
      </Card>
    </ScrollView>
  );
};
export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
