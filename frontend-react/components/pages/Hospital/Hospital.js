import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardViewWithImage } from "react-native-simple-card-view";
import "./Hospi.css";

const AppointmentScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <p>
        <a href="#0">Choose a Hospital</a>
      </p>
      <CardViewWithImage
        width={"96%"}
        source={{ uri: "https://www.hdf.usj.edu.lb/imag/11/hdf3.jpg" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={"100%"}
        imageHeight={180}
        roundedImage={false}
        onPress={() => navigation.navigate("Doctor")}
      />
      <CardViewWithImage
        width={"96%"}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={"100%"}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={"96%"}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={"100%"}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={"96%"}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={"100%"}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={"96%"}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={"100%"}
        imageHeight={150}
        roundedImage={false}
      />
    </ScrollView>
  );
};
export default AppointmentScreen;

const styles = StyleSheet.create({
  hospital: {
    textAlign: "center",
    fontSize: "30px",
  },
});
