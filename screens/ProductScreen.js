import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ProductDetailScreen = ({ navigation }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const username = 'Nome do Usuario';
  const productName = 'Nome do Produto';

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const renderDescription = () => {
    if (isDescriptionExpanded) {
      return (
        <Text style={styles.productDescription}>
          Descrição detalhada do produto.
        </Text>
      );
    }
    return null;
  };

  const AddToCart = () => {
    console.log('Produto adicionado ao carrinho');
  };

  const BuyNow = () => {
    console.log('Produto comprado');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.imageBackground}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Text style={styles.cart}>Meu carrinho</Text>
          </TouchableOpacity>
          <Text style={styles.username}>{username}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{productName}</Text>
            {renderDescription()}
            <TouchableOpacity
              style={styles.expandButton}
              onPress={toggleDescription}>
              <Text style={styles.expandButtonText}>
                {isDescriptionExpanded ? 'Mostrar menos' : 'Mostrar mais'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShoppingCart')}>
              <Text style={styles.buttonText}>Comprar agora</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  imageBackground: {
    alignItems: 'center',
  },
  cart: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    width: 400,
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  productDetails: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
  },
  productDescription: {
    marginBottom: 16,
  },
  expandButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  expandButtonText: {
    fontSize: 14,
    color: '#888888',
  },
  button: {
    width: 300,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetailScreen;
