import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppText from './Text'

export default function DrillCard({ drill }) {
  return (

    <View style={styles.container}>
      <Image 
        source={{ uri: `https://image.mux.com/${drill.drillVideoId}/thumbnail.png?width=428&start=3.0864165`}}
        style={styles.image}
      />
      <AppText style={styles.drillInfo}>{drill.name}</AppText>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 160,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.primary,
  },
  image: {
    height: 100,
    width: 170
  },
  drillInfo: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignSelf: 'center'
  }
})
