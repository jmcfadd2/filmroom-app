import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import AppButton from '../../components/Button';
import AppText from '../../components/Text';
import routes from '../../navigation/routes';

export default function SessionLoadingScreen({ navigation }) {
  
  const [loading, setLoading] = useState(true);
  const loadingtimer = () => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }
  
  useEffect(() => {
    loadingtimer()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
      <ActivityIndicator size='large'  />
      ) : (
        <>
        <AppText>
          Loading complete! Go to the home tab and refresh to view your post!
        </AppText>
        <AppButton title='See Timeline' style={styles.button} onPress={() => navigation.navigate(routes.FEEDS)} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20
  },
  button: {
    width: 100,
  }
})
