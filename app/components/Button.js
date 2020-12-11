import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function AppButton({ title, onPress, color='lightgreen' }) {
  return (
    <TouchableOpacity TouchableOpacity style={[styles.button, { backgroundColor: color}]} onPress={onPress}>
      
        <Text style={styles.text}>{title}</Text>
      
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