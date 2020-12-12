import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export default function ImageInput({ imageUri, onChangeImage }) {

  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert("You need to give acces")
  }

  const handlePress = () => {
    if (!imageUri) selectImage()
    else Alert.alert('Delete', 'Are you sure you want to delete this image?',
      [{ text: 'Yes', onPress: () => onChangeImage(null) },
      { text: 'No' },
      ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log("Error reading image")
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" color='grey' size={50} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
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
