import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { cartTotalItemsSelector } from '../store/selectors/selectors';
import { useNavigation } from '@react-navigation/native';

export default function TopNav ({  })  {
  const navigation = useNavigation();
  const totalItems = useSelector(cartTotalItemsSelector);

  return (
    <View style={styles.container}>
       <Text style={styles.logo}>Wompi</Text>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <View style={styles.cart}>
          <Icon name="shopping-cart" size={24} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
};
{/*            <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Home')}
      >  <Text style={styles.logo}>Wompi</Text></TouchableOpacity>
     */}

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 60,
      marginTop: 30,
      backgroundColor: '#000',
    },
    cartButton: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    logo: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    cart: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    badge: {
      backgroundColor: 'red',
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    badgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
