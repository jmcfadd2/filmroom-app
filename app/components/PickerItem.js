import React from 'react'
import { StyleSheet, TouchableOpacity,  } from 'react-native'
import Text from './Text'

export default function PickerItem({ item, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,

  }
})
