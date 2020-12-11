import React from 'react'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>
        {children}
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0 
    
  }
})
