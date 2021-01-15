import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/Text';

export default function GroupsScreen() {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons name='account-group' size={100} color={colors.grey} />
      <AppText color={colors.grey}>Teams coming soon</AppText>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})
