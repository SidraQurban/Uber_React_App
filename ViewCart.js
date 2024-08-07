import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import OrderItem from "./OrderItem";
// import firebase from "./fireBase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
const [modalVisible, setModalVisible] = useState (false);
const [loading, setLoading] = useState(false);

  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems );
  const total = items
  .map((item => Number(item.price.replace('$', ''))))
  .reduce(( prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD",
  });

  // const addOrderToFireBase =() => {
  //     // const db =firebase.firestore();
  //     db.collection("orders").add({
  //        items: items,
  //        restaurantName: restaurantName,
  //        createdAt: firebase.firestore.fieldValue.serverTimestamp(),
  //     }).then(() => {
  //          setTimeout(() =>{
  //            setLoading(false);
  //            navigation.navigate("OrderCompleted");
  //            setModalVisible(false);
  //          }, 2500);
  //     });
      
  // };

   const styles = StyleSheet.create({
         modalContainer: {
             flex: 1,
             justifyContent: "flex-end",
             backgroundColor: "rgba(0,0,0,0.7)",
         },

         modalCheckoutConatiner: {
              backgroundColor: "white",
              padding: 16,
              height: 500,
              borderWidth: 1,
         },

         restaurantName: {
              textAlign: "center",
              fontWeight: "600",
              fontSize: 18,
              marginBottom: 10,
         },

         subTotalConatiner: {
             flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 15,
         },

         subTotalText: {
             textAlign: "left",
             fontWeight: "600",
             fontSize: 15,
             marginBottom:10,
         }
   })

  const checkoutModalContent = () => {
    return (
        <>
        <View style={ styles.modalContainer}>
          <View style={styles.modalCheckoutConatiner}>
            <Text style={styles.restaurantName}> {restaurantName} </Text>
            {items.map((item, index) => (
              <OrderItem key ={index} item={item} />
            ))}
             <View style={styles.subTotalConatiner}>
               <Text style={styles.subTotalText}>SubTotal</Text>
               <Text>{totalUSD} </Text>
             </View>
             <View style={{
                  flexDirection: "row",
                  justifyContent: "center",
             }}>
              <TouchableOpacity
                 style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                     }}
                  onPress={() => {{
                    // addOrderToFireBase();
                  }}}
              > 
               <Text style={{ color: "white", fontSize: 20 }}> Checkout </Text>
               <Text style={{ 
                position: "absolute", 
                right: 20, 
                color: "white", 
                fontSize: 15, 
                top: 17}}>
                  {total ? totalUSD : ""}</Text>
               </TouchableOpacity>

             </View>
          </View>

        </View>
        </>
    );
  };
       return (
        <View 
           style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30, 
           }}>
        <View style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 30,
              width: 150,
              alignItems: "center"
        }}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text  style= {{color:"white"}}> 
        Checkout 
         </Text>
         </TouchableOpacity>
         </View>
         </View>
       )

  
  return (
    <>
    <Modal animationType=" slide"
     visible={modalVisible} 
     transparent= {true} 
     onRequestClose={() =>setModalVisible(false) }> 
       
       {checkoutModalContent()}
     </Modal>
    {total ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        position: "absolute",
        bottom: 130,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection:"row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 15,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{
             color: "white",
            fontSize: 20, 
            marginRight: 30 }}>
               View Cart
                </Text>
                <Text
                  style ={{
                    color: "white",
                    fontSize: 20
                  }}
                >
                  { totalUSD }
                  </Text>
        </TouchableOpacity>
      </View>
    </View>
     )  : (
    <> </> 
    )} 
    {loading ?  <View style={{
      backgroundColor:"black", 
      position:"absolute", 
      opacity: 0.6,
      justifyContent: "center",
      alignSelf: "center",
      flex: 1
    }}> </View> 
   :(
  
    <></>

  )};
  </>
  );
  
}