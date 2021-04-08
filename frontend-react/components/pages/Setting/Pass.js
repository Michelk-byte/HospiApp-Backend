import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';

const PickerDemo = ({navigation}) => {
  const [blood, setBlood] = useState('A+');
  const [value, setValue] = useState(0);
  const [height, setHeight] = useState(50);
  const [email, setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [password,setPassword]  =  useState("");

  const handleSubmit=()=>{
    const data={
      email:email,
      Password:password,
      height:value,
      height:height,
      phone:phone,
      location:location,
      blood:blood
    }
    alert("sending data: "+data.email)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Edit Profile </Text>
      <View>
        <TextInput placeholder="Email" style={styles.inputStyle} onChangeText={(data)=>setEmail(data)}  />
       
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={(data)=>setPassword(data)}
        />
         <TextInput placeholder="phone-number" style={styles.inputStyle} onChangeText={(data)=>setPhone(data)} />
        <TextInput placeholder="Location" style={styles.inputStyle}  onChangeText={(data)=>setLocation(data)} />

        <Picker style={{ marginTop:20,}}
          selectedValue={blood}
          onValueChange={currentBlood => setBlood(currentBlood)}>
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
        </Picker>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Blood type: {blood}
        </Text>
        
         <Slider
          style={{marginTop: 20}}
          step={1}
          minimumValue={0}
          maximumValue={635}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          weight value: {value} kg
        </Text>

        <Slider
          style={{marginTop: 20}}
          step={1}
          minimumValue={50}
          maximumValue={220}
          value={height}
          onValueChange={slideValue => setHeight(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          height value: {height} cm
        </Text>
        <View style={{marginTop:20}}>
        <Button
          
          title="Submit"
          color="blue"
          onPress={() => handleSubmit()}
        >
          <Text>SUBMIT</Text>
          </Button> 
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default PickerDemo;