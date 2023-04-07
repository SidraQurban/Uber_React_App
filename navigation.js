import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import RestaurantDetails from "./RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './redux/store';
import OrderCompleted from './OrderCompleted';

const store = configureStore();

export default function RootNavigation() {
const Stack = createStackNavigator();

const screenOptions = {
  headershown: false,
};


  return (
    <ReduxProvider store={store}>
   <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions ={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Restaurant Detail" component={RestaurantDetails} />
           <Stack.Screen name="OderCompleted" component={OrderCompleted} />
        </Stack.Navigator>

      </NavigationContainer>
      </ReduxProvider>
    )
}