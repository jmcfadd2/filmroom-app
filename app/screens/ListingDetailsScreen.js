import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from '../components/Text'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/park-ball.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Workout Session</AppText>
        <AppText style={styles.subtitle}>$100</AppText>
        <ListItem
          image={require("../assets/park-ball.jpg")}
          title='Justin McFadden'
          subtitle='Basketball Player'
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    color: 'green'
  }
})
