import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

import auth,{firebase} from '@react-native-firebase/auth';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Authenticated from './Authenticated';

const Registration = (props) => {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
 
const user = firebase.auth().currentUser;
const createUser = (email, password) => {
    try {
        //console.log('Email is ===>',user)
      //console.log('Password is ===>',password)
      auth().createUserWithEmailAndPassword(email,password);
     
    } catch (error) {
      alert(error);
    }
  };

  
  if (authenticated) {
    return <Authenticated  />;
  }
 
  return (
    <View style={styles.screen}>
      <Text style={{fontSize:25,fontWeight:"bold"}}>Registation Form</Text>
      <TextInput
        style={styles.input}
        value={getEmail}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType='email-address'
        autoCompleteType='off'
      />
      <TextInput
        style={styles.input}
        value={getPassword}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
       {/* <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder=" Confirm Password"
        secureTextEntry={true}
      /> */}
      <TouchableOpacity 
      style={{width:'75%',height:'7%',backgroundColor:'blue',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:12}}
      createUser={createUser(email,password)}>
        <Text style={{color:'white'}}>Submit</Text>
      </TouchableOpacity>
           <Text onPress={()=>props.navigation.navigate('HomeScreen')} style={{marginTop:12}}>I have already have an account</Text>
      {/* <Text style={styles.text}>Welcome{user.email}</Text>
      <View style={styles.button}>
        <Button title="Signout" onPress={() => auth().signOut()}/>
      </View> */}
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

export default Registration