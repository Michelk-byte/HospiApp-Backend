import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardViewWithImage } from "react-native-simple-card-view";
import "../Hospital/Hospi.css";

const LabReserScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <p>
        <a href="#0">Choose a Lab</a>
      </p>
      <CardViewWithImage
        width={"96%"}
        source={{
          uri:
            "data:image/png;base64,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",
        }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={"100%"}
        imageHeight={180}
        roundedImage={false}
        onPress={() => navigation.navigate("LabTest")}
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
export default LabReserScreen;

const styles = StyleSheet.create({
  hospital: {
    textAlign: "center",
    fontSize: "30px",
  },
});
