import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants =[
    {
        name: "Ghetto",
        image_url:
         "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
         categories:  [{title: "Fast Food"}, {title: "Snacks"}, {title:"Ice-Cream"}, {title: "Drinks"} ],
        price: "$18",
        reviews: "1500",
        rating: 4.9,
    },
    {
        name: "Baya Bar Bay Ridge",
        image_url: 
        "https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        categories:  [{title: "Bar"}, {title: "Burgers"}, {title:"Ice-Creams"}, {title: "Drinks"} ],
        price: "$$",
        reviews: 2987,
        rating: 4.6,
    },
    {
        name: "Benihana",
        image_url: 
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        categories:  [{title: "Cafe"}, {title: "Fast-Food"}, {title:"Chocolates"}, {title: "Drinks"} ],
        price: "$$",
        reviews: 3879,
        rating: 4.7,
    },
    {
        name: "Resto Cafe",
        image_url:
         "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
         categories:  [ {title: "Fast-Foods"}, {title:"Snacks"}, {title: "Drinks"} ],
        price: "$$",
        reviews: 4987,
        rating: 4.9,
    },
    {
        name: "Desi Food",
        image_url: 
        "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        categories:  [ {title: "Fast-Foods"}, {title:"Snacks"}, {title: "Drinks"} ],
        price: "$$",
        reviews: 4398,
        rating: 4.8,
    },
    
    
]

export default function RestaurantItems({ navigation, ...props}) {
  return (
   <>
        {props.restaurantData.map((restaurant, index) => ( 
          <TouchableOpacity
          key= {index}
          activeOpacity={1} style={{ marginBottom: 30}}
          onPress={() => navigation.navigate('Restaurant Detail', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories
            
          }) }
          >
    <View 
    style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
        
      <RestaurantImage image={restaurant.image_url} />
      <RestaurantInfo 
      name={restaurant.name} 
      rating={restaurant.rating} />
    </View>
    </TouchableOpacity>
    ))}
    </>
    
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 *min</Text>
    </View>
    <View style={{ 
        backgroundColor: "#eee", 
        height: 30, 
        width: 30, 
        alignItems:"center", 
        justifyContent:"center",
        borderRadius: 15 }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
