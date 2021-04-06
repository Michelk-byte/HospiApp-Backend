import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

const Test = ({ navigation }) => {
  const [value, onChange] = useState("10:00");
  const [datevalue, setDate] = useState(new Date());
  console.log(value);
  console.log(datevalue);

  return (
    <ScrollView>
      <CardViewWithImage
        width={"96%"}
        source={{
          uri:
            "data:image/jpeg;base64,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",
        }}
        ima
        content={"Complete Blood Count blood test related to ...."}
        title={"Complete Blood Count"}
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
        description="Weekdays 8am -> 6pm"
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
        description="120 000L.L/test"
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
export default Test;
