import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from '../components/Text'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({ route }) {
  const listing = route.params
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>{listing.subtitle}</AppText>
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
