import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 6,
    backgroundColor: '#EFEFEF',
  },

});

export default Login;
