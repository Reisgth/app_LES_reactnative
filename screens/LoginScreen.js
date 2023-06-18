import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from 'react-native';
import Login from '../components/Login';

export default function App({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/fundo.png')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Login />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.text}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 200,
    width: 300,
  },
  button: {
    height: 40,
    width: 100,
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'black',
    opacity: 0.85,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
