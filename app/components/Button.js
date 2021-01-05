import React from 'react'
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../config/colors';


export default function AppButton({ title, onPress, color= colors.accent, style, loading }) {
  return (
    <TouchableOpacity TouchableOpacity style={[styles.button, { backgroundColor: color}, style]} onPress={onPress}>
        
        {!loading ? (
          <Text style={styles.text}>{title}</Text>
        ) : (
          <ActivityIndicator size='large'/>
        )
      }
      
    </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'lightgreen',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: "center",
      padding: 15,
      width: '100%',
      marginVertical: 10
    },
    text: {
      color: 'white',
      fontSize: 18,
      textTransform: 'uppercase',
      fontWeight: "bold"
    }
  })