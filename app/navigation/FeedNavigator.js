import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import routes from './routes';


const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.FEEDS} component={FeedsScreen} />
    <Stack.Screen name={routes.POST_DETAILS} component={PostDetailsScreen} />
  </Stack.Navigator>
)

export default FeedNavigator