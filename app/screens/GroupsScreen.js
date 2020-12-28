import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

export default function GroupsScreen() {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons name='account-group' size={100} color='black' />
      <Text>Groups Screen Coming Soon</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
