import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from './About'
import MenuItems from './MenuItems'
import ViewCart from './ViewCart'

export default function RestaurantDetails({ route, navigation}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20}} />
      <MenuItems />
      <ViewCart navigation= {navigation} restaurantName={ route.params.name } />
    </View>
  )
}