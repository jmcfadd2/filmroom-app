import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import defaultStyles from '../config/styles'

export default function AppText({children, style, ...otherProps}) {
  return (
      <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
  )
}


