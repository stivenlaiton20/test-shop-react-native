import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import {  useDispatch } from 'react-redux';
import getCartState from '../store/selectors/getCartState';
import { addToCart as addToCartCart, removeFromCart as removeFromCartCart } from '../store/slices/cartSlice';
import {
  addToCart as addToCartProducts,
  removeFromCart as removeFromCartProducts,
  
  decreaseQuantity,
} from '../store/slices/cartProductsSlice';

export default function ProductsScreen() {
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({});
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch();
  const handleAddToCart = (product: Product) => {
   
    dispatch(addToCartProducts({
      ...product,
      quantity: quantity[product.id] || 1
    }));
    setQuantity({ ...quantity, [product.id]: (quantity[product.id] || 0) + 1 });
  };
  const handleRemoveFromCart = (productId: string) => {
    dispatch(decreaseQuantity(productId));
    dispatch(removeFromCartCart(productId));
    setQuantity({ ...quantity, [productId]: (quantity[productId] || 0) - 1 });
  };
  const cartState = getCartState();
  useEffect(() => {
    setProducts(cartState.items);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <Card key={product.id} style={styles.card}>
          <Image source={product.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{`$${product.price}`}</Text>
          </View>
          <View style={styles.buttons}>
            <Button
              icon={<Icon name="add" color="white" />}
              buttonStyle={styles.addButton}
              onPress={() => handleAddToCart(product)}
            />
          <Text style={styles.quantity}>{quantity[product.id] || 0 }
        </Text>
        <Button
          icon={<Icon name="remove" color="white" />}
          buttonStyle={styles.removeButton}
          onPress={() => handleRemoveFromCart(product.id)}
          disabled={ quantity[product.id] > 0 ? false : true }
 
        />
    
  
      </View>
    </Card>
  ))}
</ScrollView>
);
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#F2F2F2',
  padding: 10,
  },

  card: {
  padding: 10,
  margin: 5,
  borderRadius: 10,
  },
  image: {
  height: 250,
  
  width: '100%',
  },
  details: {
  marginVertical: 10,
  },
  name: {
  fontWeight: 'bold',
  fontSize: 18,
  },
  description: {
  marginVertical: 5,
  fontSize: 14,
  },
  price: {
  fontSize: 16,
  color: '#009688',
  fontWeight: 'bold',
  },
  buttons: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  },
  addButton: {
  backgroundColor: '#009688',
  borderRadius: 20,
  marginHorizontal: 5,
  },
  removeButton: {
  backgroundColor: '#C62828',
  borderRadius: 20,
  marginHorizontal: 5,
  },
  addProduct: {
  backgroundColor: '#62CDFF',
  padding: 8,
  borderRadius: 10,
  },
  addTExt:{
  color: 'white',
  fontWeight: 'bold',
  fontSize: 15,
  },
  quantity: {
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
  fontSize: 16,
  fontWeight: 'bold',
  },
  });