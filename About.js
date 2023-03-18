import { View, Text, Image } from 'react-native';
import React from 'react';

const RestaurantInfoo = {
  name:"Comfrot Food",
  image: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  price: "$$",
  reviews:"1900",
  rating:4.5,
  categories: [{title: "Thai"}, {title: "Food"}],
};

const { name, image, price, reviews, rating, categories} = RestaurantImage;
const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${ formattedCategories } ${ price ? ' • ' + price : ""} • 🎫 • ${rating} ⭐ (${reviews} +)`;

// const image = "https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
// const title="Baya Bar Bay Ridge"
// const description= "Fast Food • Drinks • Ice-cream • Snacks • $$ • 🎫 • 4.6 ⭐ (2985+) "
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{uri:props.image}} style={{width: "100%", height: 180}} />
)

const RestaurantName = (props) => (
    <Text
    style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}
    > {props.title }</Text>
)

const RestaurantDescription = (props) => (
    <Text
    style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5
    }}
    > {props.description} </Text>
)