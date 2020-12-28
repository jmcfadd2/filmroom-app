import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from './Icon'

export default function VideoListItem({ title, onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name="play-circle" size={60} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
