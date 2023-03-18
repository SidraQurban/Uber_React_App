 import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../Uber_React_App/assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../Uber_React_App/assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../Uber_React_App/assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../Uber_React_App/assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../Uber_React_App/assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../Uber_React_App/assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../Uber_React_App/assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}