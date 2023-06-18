import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const products = [
  { id: '1', name: 'produto 1', description: 'Descrição do produto 1' },
  { id: '2', name: 'produto 2', description: 'Descrição do produto 2' },
  { id: '3', name: 'produto 3', description: 'Descrição do produto 3' },
  { id: '4', name: 'produto 4', description: 'Descrição do produto 4' },
  { id: '5', name: 'produto 5', description: 'Descrição do produto 5' },
  { id: '6', name: 'produto 6', description: 'Descrição do produto 6' },
  { id: '7', name: 'produto 7', description: 'Descrição do produto 7' },
  { id: '8', name: 'produto 8', description: 'Descrição do produto 8' },
  { id: '9', name: 'produto 9', description: 'Descrição do produto 9' },
  { id: '10', name: 'produto 10', description: 'Descrição do produto 10' },
  { id: '11', name: 'produto 11', description: 'Descrição do produto 11' },
  { id: '12', name: 'produto 12', description: 'Descrição do produto 12' },
  { id: '13', name: 'produto 13', description: 'Descrição do produto 13' },
  { id: '14', name: 'produto 14', description: 'Descrição do produto 14' },
  { id: '15', name: 'produto 15', description: 'Descrição do produto 15' },
];

const HomeScreen = ({ navigation }) => {
  const username = 'Nome do Usuario';

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('ProductScreen')}>
        <Text style={styles.textBuy}>Comprar</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.imageBackground}>
        <View style={styles.header}>
          <TextInput style={styles.searchInput} placeholder="Pesquisar" />
          <Text style={styles.username}>Olá {username}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Text style={styles.username}>Meu carrinho</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productList}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  section: {
    alignItems: 'center',
    width: 200,
    marginBottom: 25,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  username: {
    marginLeft: 16,
    fontWeight: 'bold',
  },
  productList: {
    padding: 16,
  },
  productItem: {
    alignItems: 'center',
    width: 300,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  productDescription: {
    color: '#888888',
  },
  textBuy: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'gray',
    marginTop: 20,
    borderRadius: 15,
    width: 125,
  },
  imageBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 150,
  },
});

export default HomeScreen;
