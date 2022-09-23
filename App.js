import { StyleSheet, Text, View,SafeAreaView} from 'react-native'
import React,{useEffect,useState} from 'react'
import { requestUserPermission,notificationListener} from './src/Screens/NotificationServices'
import Authentication from './src/Screens/Authentication';
import auth from '@react-native-firebase/auth';
import Authenticated from './src/Screens/Authenticated';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import StackNavigation from './src/navigation/StackNavigation'
//import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  // const [authenticated, setAuthenticated] = useState(false);
 
  // useEffect(()=>{
  //   requestUserPermission()
  //   notificationListener()
  // })

  // const createUser = (email, password) => {
  //   try {
  //     auth().createUserWithEmailAndPassword(email,password);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // const signin = (email, password) => {
  //   try {
  //     auth().signInWithEmailAndPassword(email, password);
  //     console.log('My email--->',email)
  //     console.log('My Password--->',password)
      
  //     AsyncStorage.setItem('Email', email)
    

  //   } catch (error) {
  //     alert(error);
  //   }
  // };


  // auth().onAuthStateChanged((user) => {
  //   if(user) {
  //     setAuthenticated(true);
  //   } else {
  //     setAuthenticated(false);
  //   }
  // })
  // if (authenticated) {
  //   return <Authenticated />;
  // }
 
 
    return(
    
      
  // <Authentication signin={signin} createUser={createUser} />
<StackNavigation/>
  
  

     
  );



};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    textAlign: 'center',
    backgroundColor: '#307ecc',
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
});
 
export default App;







