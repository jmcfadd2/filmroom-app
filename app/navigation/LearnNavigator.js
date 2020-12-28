import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';
import LearnScreen from '../screens/LearnScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';


const Stack = createStackNavigator()

const LearnNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name={routes.LEARN} component={LearnScreen} />
    <Stack.Screen name={routes.COURSE_DETAILS} component={CourseDetailsScreen} />
  </Stack.Navigator>
)

export default LearnNavigator