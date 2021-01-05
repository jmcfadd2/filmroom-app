import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export default function VideoInput({ videoUri, onChangeVideo }) {

  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert("You need to give access")
  }

  const handlePress = () => {
    if (!videoUri) selectVideo()
    else Alert.alert('Delete', 'Are you sure you want to delete this Video?',
      [{ text: 'Yes', onPress: () => onChangeVideo(null) },
      { text: 'No' },
      ])
  }

  const selectVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        quality: 0.5
      })
      if (!result.cancelled) onChangeVideo(result.uri)
    } catch (error) {
      console.log("Error reading video")
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!videoUri && <MaterialCommunityIcons name="video" color='grey' size={50} />}
        {videoUri && <Image source={{ uri: videoUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    overflow: 'hidden',
    height: 100,
    justifyContent: 'center',
    width: 100
  },
  image: {
    height: '100%',
    width: '100%'
  }
})
