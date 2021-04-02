import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signUp, register } from "../../actions/action";
import Login from "./LoginPage";

export default function Signup({ navigation }) {
  const [username, setUName] = useState("");

  const [Email, SetEmail] = useState("");
  const [pass, SetPassword] = useState("");
  const [pnumber, SetPnumber] = useState("");
  const [verifypass, SetVerifypass] = useState("");

  const dispatch = useDispatch();

  const [messagecolor, SetMessageColor] = useState("");
  const [message_show, SetMEssageShow] = useState("");

  let message = useSelector((state) => state.Signup.message);
  const status = useSelector((state) => state.Signup.status);
  let register_ = useSelector((state) => state.Signup.register);

  if (register_) {
    SetMEssageShow(message);
    if (status === 200) {
      console.log("green");
      SetMessageColor("green");
    } else if (status !== 200 && status !== "") {
      console.log("red");
      console.log(message);
      SetMessageColor("red");
    }
    dispatch(register(false));
  }

  const handleS = () => {
    const data = {
      email: Email,
      password: pass,
      name: username,
      pnumber: pnumber,
      verifypass: verifypass,
    };
    dispatch(signUp(data));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container1}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Username"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={(user) => setUName(user)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={(email) => SetEmail(email)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(pass) => SetPassword(pass)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Verify Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(verifypass) => SetVerifypass(verifypass)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="PhoneNumber"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType=""
            onChangeText={(pnumber) => SetPnumber(pnumber)}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handleS()}>
              Register
            </Text>
          </TouchableOpacity>
          <Text style={{ color: `${messagecolor}` }}>{message_show}</Text>
        </View>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.signupButton}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    width: 300,
    height: 30,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 13,
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
