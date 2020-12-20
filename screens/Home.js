import React from 'react'
import {Text,StyleSheet, ScrollView} from 'react-native'

import {Fab,Icon  } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
const Home = ({navigation, route}) => {

    return(
        <ScrollView contentContainerStyle = {styles.container}>
        
        <Text>List of seasons goes here</Text>
        <Fab
        style={{backgroundColor: "#5067FF"}}
        position="bottomRight"
        onPress={() => navigation.navigate('Add')}

        >

          <Icon name="add"></Icon>
        </Fab>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    emptyContainer: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      // backgroundColor: '#1b262c',
      flex: 1,
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginVertical: 15,
      marginHorizontal: 5,
    },
    actionButton: {
      marginLeft: 5,
    },
    seasonName: {
      color: '#fdcb9e',
      textAlign: 'justify',
    },
    listItem: {
      marginLeft: 0,
      marginBottom: 20,
    },
  });