import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ShoppingCart from './screens/ShoppingCart';
import PurchaseScreen from './screens/PurchaseScreen';

// In App.js in a new project

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="PurchaseScreen" component={PurchaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;