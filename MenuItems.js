import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';

const foods = [
    {
        title: "Sandwich",
        description: "slices of meat, cheese between two slices of bread with fries",
        price:"$10.77",
        image: "https://images.unsplash.com/photo-1626078299034-89c04b7fe4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {

        title: "Lasagna",
        description: "With butter lectuce, tomato and sauce bachamel",
        price:"$12.50",
        image: "https://images.unsplash.com/photo-1597289124948-688c1a35cb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    
    {
        title: "Strawberry cocktail drinks",
        description: "Maple syrup, tequila, ice, lime juice, cointreau",
        price:"$13",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=472&q=80"
    },
    {

        title: "Hot Dog",
        description: "Processed meat product made by mixing chopped meat with various curing ingredients, flavorants, and colorant",
        price:"$13.90",
        image: "https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1891&q=80"
    },
    {

        title: "BBQ Chicken Pizza",
        description: "Layered with smokey bbq sauce, chicken pieces, creamy mozzarella, sweet pineapple, and flavorful red onion",
        price:"$17.89",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
    },
    {

        title: "Hamburger",
        description: "Topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty cheese.",
        price:"$14.50",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
    },
    {
        title: "Oreo Bowl",
        description: "Indulgently creamy ice cream and loaded with Oreo cookies.",
        price:"$9",
        image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
    },
    {
        title: "Chicken nuggets",
        description: "Crispy, golden, fried chicken strips, with ketchup",
        price: "$12",
        image:"https://media.istockphoto.com/id/1364905721/photo/crispy-fried-breaded-chicken-breast-strips.jpg?s=1024x1024&w=is&k=20&c=1m1x-lvSnjJ3ommTND-5nru97k9aWoPVPXwSrRT6Dk8="
    },
    {
        title: "Drinks",
        description: "Fresh Drinks",
        price:"$10.70",
        image: "https://images.unsplash.com/photo-1582183591295-9a2fe0170e3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
    },

    {

        title: "Ice Cream",
        description: "Heavy cream, rainbow sprinkles, whole milk, vanilla",
        price:"$10",
        image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80"
    },
    {

    },
    {

    },

    
]

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>  
           <View style={styles.menuItemStyle}>
            <BouncyCheckbox />
      <FoodInfo food={food} />
      <FoodImage food={food} />
    </View>
    <Divider width={0.5}  orientation="vertical" style={{ marginHorizontal: 20 }}/>
    </View>
    ))}
     </ScrollView>
  );  
}
const styles = StyleSheet.create({
    menuItemStyle: {
       flexDirection:"row",
       justifyContent:"space-between",
       margin: 20,
    },
    titleStyle: {
          fontSize: 19,
          fontWeight: 600,
    }
})

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent:"space-evenly" }}>
        <Text style={styles.titleStyle}> {props.food.title} </Text>
        <Text> {props.food.description} </Text>
        <Text> {props.food.price} </Text>
    </View>
);

const FoodImage = (props) => (
    <View> 
        <Image 
        source ={{uri: props.food.image}}  
        style={{ width:100, height: 100, borderRadius: 8}} 
        />
    </View>
)
