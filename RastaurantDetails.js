import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from './About'
import MenuItems from './MenuItems'

export default function RastaurantDetails({ route}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20}} />
      <MenuItems />
    </View>
  )
}