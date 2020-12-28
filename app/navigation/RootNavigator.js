import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector, useDispatch } from 'react-redux';
import LearnNavigator from './LearnNavigator';
import SessionScreen from '../screens/session/SessionScreen';
import navigationTheme from './navigationTheme';


const RootNavigator = () => {
  const authenticated = useSelector(state => state.user.authenticated)

  return (
  <NavigationContainer theme={navigationTheme}>
      {/* <SessionScreen /> */}
    {!authenticated ? <AuthNavigator /> : <AppNavigator />}
  </NavigationContainer>
)}

export default RootNavigator