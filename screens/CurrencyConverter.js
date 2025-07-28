// CurrencyConverter.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const offlineRates = {
  USD: 1,
  INR: 83,
  EUR: 0.91,
  GBP: 0.77,
  JPY: 142.5
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [converted, setConverted] = useState(null);

  const convertCurrency = () => {
    const amt = parseFloat(amount);
    if (!amt || !offlineRates[fromCurrency] || !offlineRates[toCurrency]) return;
    const usdValue = amt / offlineRates[fromCurrency];
    const finalValue = usdValue * offlineRates[toCurrency];
    setConverted(finalValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter (Offline Mode)</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text style={styles.label}>From ({fromCurrency}) → To ({toCurrency})</Text>
      <View style={styles.switchContainer}>
        <Button title="Switch" onPress={() => {
          setFromCurrency(toCurrency);
          setToCurrency(fromCurrency);
          setConverted(null);
        }} />
      </View>
      <Button title="Convert" onPress={convertCurrency} />
      {converted && <Text style={styles.result}>Converted Amount: {converted} {toCurrency}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 15
  },
  label: {
    marginBottom: 10
  },
  switchContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});