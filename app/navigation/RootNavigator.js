import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector, useDispatch } from 'react-redux';
import LearnNavigator from './LearnNavigator';


const RootNavigator = () => {
  const authenticated = useSelector(state => state.user.authenticated)

  return (
  <NavigationContainer>
      {/* <LearnNavigator /> */}
    {!authenticated ? <AuthNavigator /> : <AppNavigator />}
  </NavigationContainer>
)}

export default RootNavigator