import { View, Text, StyleSheet, TextInput } from 'react-native';

const PurchaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agradecemos pela compra!</Text>
      <Text style={styles.description}>
        Por favor, insira seu contato e aguarde o nosso contato para o pagamento e mais informações sobre a entrega.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Contato"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
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

export default PurchaseScreen;