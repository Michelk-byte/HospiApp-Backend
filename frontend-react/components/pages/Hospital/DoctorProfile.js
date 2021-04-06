import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

const DoctorProfile = ({ navigation }) => {
  const [value, onChange] = useState("10:00");
  const [datevalue, setDate] = useState(new Date());
  console.log(value);
  console.log(datevalue);

  return (
    <ScrollView>
      <View style={{ zIndex: "-1" }}>
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
      </View>
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: "10px",
          marginRight: "10px",
          zIndex: "-1",
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
          zIndex: "-1",
        }}
        title="Fee"
        description="100 000L.L/session"
        left={(props) => <List.Icon {...props} icon="cash" />}
      />

      <View
        style={{
          alignItems: "center",
          zIndex: "-1",
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          height: "50px",
        }}
      >
        <View style={{ alignItems: "center", zIndex: "-1", marginTop: "5px" }}>
          <Text style={{ marginBottom: "10px" }}>Pick a Day:</Text>
          <DatePicker onChange={setDate} value={datevalue} />
        </View>
        <View style={{ alignItems: "center", zIndex: "-1", marginTop: "5px" }}>
          <Text style={{ marginBottom: "10px" }}>Pick an Hour:</Text>
          <TimePicker onChange={onChange} value={value} disableClock={false} />
        </View>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          style={{ zIndex: -1 }}
          icon={<FontAwesome name="stethoscope" color="#ffffff" size="20px" />}
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginTop: "15px",
            marginBottom: 10,
            backgroundColor: "red",
          }}
          title="BOOK AN APPOINTMENT"
          titleStyle={{ marginLeft: 10, fontSize: 15 }}
        />
      </View>
    </ScrollView>
  );
};
export default DoctorProfile;
