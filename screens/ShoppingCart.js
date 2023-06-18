import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ShoppingCart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Produto 1' },
    { id: '2', name: 'Produto 2' },
    { id: '3', name: 'Produto 3' },
  ]);

  const username = 'Usuário';

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.imageBackground}>
        <View style={styles.header}>
          <Text style={styles.username}>{username}</Text>
        </View>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>Carrinho vazio</Text>
          }
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PurchaseScreen')}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    width: 400,
  },
  username: {
    fontWeight: 'bold',
  },
  listContainer: {
    width: 400,
    flexGrow: 0.76,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'white', 
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ShoppingCart;
