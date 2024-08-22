import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./navigators/TabNavigator";

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}