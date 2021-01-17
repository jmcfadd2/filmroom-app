import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { Video } from 'expo-av'

export default function ImageInput({ imageUri, onChangeImage, type }) {

  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert("You need to give access")
  }

  const handlePress = () => {
    if (!imageUri) selectImage()
    else Alert.alert(
      'Delete',
      'Are you sure you want to delete this image?',
      [{ text: 'Yes', onPress: () => onChangeImage(null) },
      { text: 'No' },
      ])
  }
  const selectImage = async () => {
    try {

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: type == 'images' ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
        quality: 0.5
      })
      if (!result.cancelled) {
        onChangeImage(result.uri)
      }
    } catch (error) {
      console.log("Error reading image")
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name={type == 'images' ? "camera" : 'video'} color='grey' size={50} />}
        {imageUri && type == 'images' ?
          <Image source={{ uri: imageUri }} style={styles.image} /> :
          <Video
            source={{ uri: imageUri }}
            style={imageUri && styles.image}
            useNativeControls

          />
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    marginVertical: 10,
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
