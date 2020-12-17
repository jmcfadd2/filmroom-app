import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector, useDispatch } from 'react-redux';


const RootNavigator = () => {
  const authenticated = useSelector(state => state.user.authenticated)

  return (
  <NavigationContainer>
    {!authenticated ? <AuthNavigator /> : <AppNavigator />}
  </NavigationContainer>
)}

export default RootNavigator