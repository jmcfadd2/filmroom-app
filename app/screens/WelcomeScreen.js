import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/Button';
import Text from '../components/Text';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require('../assets/park-ball.jpg')}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/filmroom-text-logo.png')} />
      
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')}/>
        <AppButton title="Register" color='tomato' onPress={() => console.log("Tapped")}/>
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 350,
    height: 100,
    
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
})

export default WelcomeScreen;