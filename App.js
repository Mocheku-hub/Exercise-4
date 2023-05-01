import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(10);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + 10);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - 10);
    }
  };
  return (
    <View style={styles.container}>
      
      <StatusBar />
      <View style={styles.bar}>
        <Text style={styles.barText}>Shop Online</Text>
        <View style={styles.tools}>
          <View style={[styles.roundTool, styles.blueTool]}>
          <EvilIcons name="search" size={24} color="black" />
          </View>
          <View style={[styles.roundTool, styles.yellowTool]}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          </View>
          <View style={[styles.roundTool, styles.redTool]}>
          <Feather name="more-vertical" size={24} color="black" />
          </View>
        </View>
      </View>
      <Text style={styles.head}>Lower Prices You Can Trust Always</Text>
      <Image style={styles.image} source={require('./assets/laptopp.jpg')} />
      <Text style={styles.name}>Refurnished Laptops</Text>
      <Text style={styles.price}>M{totalPrice} / unit</Text>
      <View style={styles.quantityContainer}>
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total Price: M{totalPrice * quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'space-between',
    
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    
    
  },
  bar: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  barText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1877F2",
  },
  tools: {
    flexDirection: "row",
    width: 130,
    justifyContent: "space-between",
  },
  roundTool: {
    width: 38,
    height: 38,
    borderRadius: 25,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  blueTool: {
    backgroundColor: "#BBDEFB",
  },
  yellowTool: {
    backgroundColor: "#FFF9C4",
  },
  redTool: {
    backgroundColor: "#FFCDD2",
  },
  head: {
    marginLeft: 55,
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 55,
  
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 115,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 85,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 90,
  }
});
