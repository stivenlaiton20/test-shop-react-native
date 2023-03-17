import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const cartProducts = useSelector((state) => state.cartProducts.items);

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={ item.product.image } style={styles.cartItemImage} /> 
        <View style={styles.cartItemTextContainer}>
          <Text style={styles.cartItemTitle}>{item.product.name}</Text>
          <Text style={styles.cartItemPrice}>{`$${item.product.price} x ${item.quantity} = $${item.product.price * item.quantity}`}</Text>
        </View>
      </View>
    );
  };

  if (cartProducts.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Tu carrito está vacío</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartProducts}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.product.id}
      />
      <View style={styles.cartSummaryContainer}>
        <Text style={styles.cartSummaryText}>Resumen</Text>
        <Text style={styles.cartSummaryTotal}>{`Total: $${cartProducts.reduce((total, item) => total + item.product.price * item.quantity, 0)}`}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItemContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  cartItemTextContainer: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    marginTop: 8,
  },
  cartSummaryContainer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  cartSummaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartSummaryTotal: {
    fontSize: 18,
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#008CBA',
    borderRadius: 8,
    paddingVertical: 12,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartScreen;