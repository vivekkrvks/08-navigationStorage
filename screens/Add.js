import React from 'react'
import {Text,StyleSheet, ScrollView} from 'react-native'

import {Fab  } from "native-base";


const Add = () => {

    return(
        <>
        
        <Text>Add Screen</Text>
        </>
    )
}

export default Add

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
    },
  });
  