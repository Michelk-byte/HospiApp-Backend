import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Fontisto";
import DropDownPicker from "react-native-dropdown-picker";

const Doctor = ({ navigation }) => {
  const [search, setSearch] = React.useState("Dermatologie");

  console.log(search);

  return (
    <ScrollView>
      <View style={{ width: "80%", marginLeft: "10%" }}>
        <DropDownPicker
          items={[
            {
              label: "Allergy and Immunology",
              value: "allergy",
              icon: () => (
                <Feather name="heartbeat-alt" size={20} color="#900" />
              ),
            },
            {
              label: "Anesthesiology",
              value: "anesthesiology",
              icon: () => (
                <Feather name="heartbeat-alt" size={20} color="#900" />
              ),
            },
            {
              label: "Dermatology",
              value: "dermatology",
              icon: () => (
                <Feather name="heartbeat-alt" size={20} color="#900" />
              ),
            },
          ]}
          multiple={true}
          multipleText="%d items have been selected."
          min={0}
          max={10}
          defaultValue={search}
          containerStyle={{ height: 40 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          onChangeItem={(item) => setSearch(item)}
        />
      </View>

      <Card containerStyle={{ width: "60%", marginLeft: "20%", zIndex: "-1" }}>
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
