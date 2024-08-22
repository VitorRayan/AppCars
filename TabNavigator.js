import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen'; 
import {FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <FontAwesome5 name="home" size={size} color={color} />
         }}      
      />

      <Tab.Screen name="Cars" component={SecondScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <FontAwesome5 name="car" size={size} color={color} />
         }}      
      />

    </Tab.Navigator>
  );
}