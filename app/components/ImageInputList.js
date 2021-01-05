import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage, type }) {
  const scrollView = useRef()
  
  return (
    <View>
    <ScrollView 
    ref={scrollView} 
    horizontal
    onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri, index) => (
          <View style={styles.image}>
            
            <ImageInput
              imageUri={uri}
              key={index}
              
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
          <ImageInput type={type} onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image: {
    marginRight: 10
  }
})
