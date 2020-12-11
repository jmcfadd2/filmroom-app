import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { FlatList, Platform, StyleSheet, View} from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    desctiption: 'd1',
    image: require('../assets/park-ball.jpg')
  },
  {
    id: 2,
    title: 'T2',
    desctiption: 'd2',
    image: require('../assets/park-ball.jpg')
  },
]

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  const handleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id)
    setMessages(newMessages)
  }
  return (
    <Screen>
  
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
          <ListItem
            title={item.title}
            subtitle={item.desctiption}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>)}
          />}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              desctiption: 'd2',
              image: require('../assets/park-ball.jpg')
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
