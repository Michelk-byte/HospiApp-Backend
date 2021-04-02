import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { set } from "react-native-reanimated";

import { useDispatch, useSelector } from "react-redux";
import { checkIn } from "../../actions/action";
import { getCookie } from "../../cookies";
import Screen from "../pages/Screen";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    dispatch(checkIn(data));
  };

  if (getCookie("sid") != "") {
    return <Screen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Text style={styles.logo}>HospiApp</Text>
        <Image
          style={styles.image}
          source={require("../../assets/logo.png")}
          imageStyle={{ opacity: 1 }}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          name="email"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          name="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => handleSubmit()}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.loginText1}
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logocontainer: {
    height: "48%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#2277e6",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#2277e6",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "#fb5b5a",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  loginText1: {
    color: "#fb5b5a",
  },
  image: {
    height: "65%",
  },
});
