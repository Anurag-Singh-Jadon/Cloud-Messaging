import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { requestUserPermission,notificationListener} from './NotificationServices'
import Authentication from './Authentication';
import auth from '@react-native-firebase/auth';
import Authenticated from './Authenticated';
//import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
   
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(()=>{
        requestUserPermission()
        notificationListener()
      })

      const createUser = (email, password) => {
        try {
          auth().createUserWithEmailAndPassword(email,password);
        } catch (error) {
          alert(error);
        }
      };
      const signin = (email, password) => {
        try {
          auth().signInWithEmailAndPassword(email, password);
          console.log('My email--->',email)
          console.log('My Password--->',password)
          
         // AsyncStorage.setItem('Email', email)
        
    
        } catch (error) {
          alert(error);
        }
      };
    
    
      auth().onAuthStateChanged((user) => {
        if(user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      })
      if (authenticated) {
        return <Authenticated />;
      }
  return (
    <Authentication signin={signin}  onPress={()=> props.navigation.navigate('Registration')}/>
    //<Authentication signin={signin} createUser={createUser} />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})