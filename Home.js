import { View, Text, SafeAreaView,ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from './HeaderTabs';
import SearchBar from './SearchBar';
import Categories from './Categories';
import RestaurantItems, { localRestaurants } from './assets/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from './BottomTabs';



export default function Home({navigation}) {
const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
            <View style={{ backgroundColor: "white", padding: 15}}>
            <HeaderTabs />
            <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            <Categories />
            <RestaurantItems restaurantData={ restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}