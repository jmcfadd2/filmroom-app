import { Video } from 'expo-av';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import Screen from '../../components/Screen';

export default function SessionStepScreen() {
  const drills = useSelector(state => state.session.drills)
  const [activeDrill, setActiveDrill] = useState(0)
  const nextDrill = () => {
    setActiveDrill(activeDrill + 1)
  }
  

  return (
    <Screen>
      <Video
        source={{ uri: `https://stream.mux.com/${drills[activeDrill].drillVideoId}.m3u8`, overrideFileExtensionAndroid: 'm3u8' }}
        resizeMode='cover'
        isLooping
        isMuted
        shouldPlay
        
        style={{ height: 300, width: '100%' }}
      />
      <Text>Sessions Go Here</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({})
