import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
)

export default AuthNavigator