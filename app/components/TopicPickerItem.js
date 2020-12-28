import React from 'react'
import { StyleSheet, TouchableOpacity,  } from 'react-native'
import Text from './Text'

export default function TopicPickerItem({ item, index, onPress }) {
  return (
    <TouchableOpacity onPress={() => {
      onPress()
      }}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,

  }
})
