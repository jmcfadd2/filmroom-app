import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Text from './Text'

export default function Card({ title, subtitle, image, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: "hidden",
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  subtitle: {
    color: 'green',
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7,
  }
})
