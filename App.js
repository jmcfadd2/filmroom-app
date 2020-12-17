import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { Provider } from 'react-redux';
import axios from 'axios';
import store from './app/redux/store';
import RootNavigator from './app/navigation/RootNavigator';
import FeedsScreen from './app/screens/FeedsScreen';


axios.defaults.baseURL = "https://us-central1-shotsup-mvp.cloudfunctions.net/api"
export default function App() {
  


  return (
    <Provider store={store}>
      {/* <RootNavigator /> */}
      <FeedsScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center'

  },
});
