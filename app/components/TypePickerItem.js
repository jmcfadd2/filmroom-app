import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native'
import Text from './Text'

export default function TypePickerItem({ item, index, onPress }) {
  
  return (
    <TouchableOpacity onPress={() => {
      onPress()
    }}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,

  }
})
