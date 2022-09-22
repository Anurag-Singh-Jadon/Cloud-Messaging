import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Authenticated = () => {

  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Email',email)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
 

  const user = firebase.auth().currentUser;

  return (
    <View style={styles.screen}>
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
});

export default Authenticated