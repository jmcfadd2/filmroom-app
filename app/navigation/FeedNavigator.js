import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import routes from './routes';
import colors from '../config/colors';
import ViewImageScreen from '../screens/ViewImageScreen';


const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      
    }}
  >
    <Stack.Screen name={routes.FEEDS} component={FeedsScreen} />
    <Stack.Screen name={routes.POST_DETAILS} component={PostDetailsScreen} />
    <Stack.Screen name={routes.VIEW_IMAGE} component={ViewImageScreen} />
  </Stack.Navigator>
)

export default FeedNavigator