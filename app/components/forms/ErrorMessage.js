import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../Text'

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null
  return (
  <Text style={styles.error}>{error}</Text>
  )
}

const styles = StyleSheet.create({
  error: { color: 'red'}
})
