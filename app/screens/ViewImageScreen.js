import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' size={35} />
      </View>
      <Image 
        resizeMode="contain"
        source={require('../assets/park-ball.jpg')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right
  }
})
