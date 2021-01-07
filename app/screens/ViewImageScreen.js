import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from '../components/Text'
import { Video } from 'expo-av'

export default function ViewImageScreen({ route }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' size={35} />
      </View>
      {route.params.image !== undefined && 
      <Image
        source={{ uri: route.params.image  }}
        style={{ width: 100, height: 100 }}
      />}
      {route.params.video !== undefined && 
        <Video
        source={{ uri: `https://stream.mux.com/${route.params.video}.m3u8`}}
        useNativeControls
        style={{height: '100%', width: '100%'}}
        />
      }
      {console.log(route.params)}
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,

  }
})
