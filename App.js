import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Add from './screens/Add'
import Edit from './screens/Edit'

const Stack = createStackNavigator();

const App = () => {
  return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen
       name = "Home"
       component={Add}
       option={{
         headerStyle:{
           backgroundColor: "0f4c75"
         },
         title: 'bb',
         headerTitleStyle:{
           textAlign:"center",
           color:"00b7c2"
         }
       }}
       >

       </Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;
