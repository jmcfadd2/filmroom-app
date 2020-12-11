import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'

const listings = [
  {
    id: 1,
    title: 'Redjack',
    price: 100,
    image: require('../assets/park-ball.jpg')
  },
  {
    id: 2,
    title: 'Couch',
    price: 100,
    image: require('../assets/park-ball.jpg')
  }
]
export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) =>
        <Card
          
          title={item.title}
          subtitle={'$' + item.price}
          image={item.image}
        />
      }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
})
