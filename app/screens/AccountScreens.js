import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: 'lightgreen',

    }
  },
  {
    title: 'My Listings2',
    icon: {
      name: 'email',
      backgroundColor: 'lightblue',

    },
  }
]

export default function AccountScreens() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Justin McFadden'
          subtitle='justinmcfadd'
          image={require('../assets/park-ball.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          }
        />
      </View>
      <ListItem
      title="Log Out"
      IconComponent={
        <Icon name="logout" backgroundColor='yellow' />
      }
      />

    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: 'lightgrey'
  }
})
