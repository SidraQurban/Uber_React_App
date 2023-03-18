import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import RastaurantDetail from "./RastaurantDetails"

export default function RootNavigation() {
const Stack = createStackNavigator();

const screenOptions = {
  headershown: false,
};


  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions ={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='RastaurantDetail' component={RastaurantDetail} />
        </Stack.Navigator>

      </NavigationContainer>
    )
}