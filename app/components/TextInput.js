import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function AppTextInput({ icon, width = '100%', fontSize = 18, style, ...otherProps}) {
  return (
    <View style={[styles.container, {width}, style]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color='grey' style={styles.icon} />}
      <TextInput 
      placeholderTextColor= 'grey'
      allowFontScaling={false}
      style={[defaultStyles.text, styles.textInput, {fontSize}]} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    margin: 10
  },
  
})
