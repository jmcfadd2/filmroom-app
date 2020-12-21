import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreens from '../screens/AccountScreen';
import ListingEditScreen from '../screens/CreatePostScreen';
import FeedsScreen from '../screens/FeedsScreen';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import routes from './routes';
import LearnNavigator from './LearnNavigator';


const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.FEEDS}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={35} />
        )
      }}
    />
    <Tab.Screen
      name={routes.LEARN}
      component={LearnNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Foundation name="play-video" size={35} color={color} />
        )
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreens}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={35} />
        )
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator