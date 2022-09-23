// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../Screens/Authentication';
import Authenticated from '../Screens/Authenticated';
import HomeScreen from '../Screens/HomeScreen';
import Registration from '../Screens/Registration';



const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:'false'}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Authenticated" component={Authenticated} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;