import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppText({children, style, color = colors.white, ...otherProps}) {
  return (
      <Text style={[defaultStyles.text, style, {color: color}]} {...otherProps}>{children}</Text>
  )
}


