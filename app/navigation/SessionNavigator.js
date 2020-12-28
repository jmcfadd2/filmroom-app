import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import routes from './routes';
import SessionScreen from '../screens/session/SessionScreen';
import SessionStepScreen from '../screens/session/SessionStepScreen';
import StageSessionScreen from '../screens/session/StageSessionScreen';


const Stack = createStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name={routes.SESSION} component={SessionScreen} />
    <Stack.Screen name={routes.SESSION_STEP} component={SessionStepScreen} />
    <Stack.Screen name={routes.SESSION_STAGE} component={StageSessionScreen} />
  </Stack.Navigator>
)

export default AccountNavigator