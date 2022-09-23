import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
//import AsyncStorage from '@react-native-async-storage/async-storage';
const Authenticated = (props) => {

  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const[age,setAge] = useState(0)
const user = firebase.auth().currentUser;

  return (
    <View style={styles.screen}>
      <Text style={{fontSize:25,fontWeight:"bold"}}>Registation Form</Text>
       <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="FirstName"
        keyboardType='phone-pad'
        autoCompleteType='off'
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="LastName"
        keyboardType='name-phone-pad'
        autoCompleteType='off'
      />
        <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        keyboardType='number-pad'
        autoCompleteType='off'
      />
      <TouchableOpacity style={{width:'75%',height:'7%',backgroundColor:'blue',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:12}}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Welcome{user.email}</Text>
      <View style={styles.button}>
        <Button title="Signout" onPress={() => auth().signOut()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  button: {
    marginTop: 30,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    marginBottom: 30,
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    marginVertical: 10,
    padding: 15,
  },
});

export default Authenticated