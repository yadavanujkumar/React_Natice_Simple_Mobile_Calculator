// TipCalculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('15');
  const [tipAmount, setTipAmount] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateTip = () => {
    const billNum = parseFloat(bill);
    const tipNum = parseFloat(tipPercent);
    if (!billNum || !tipNum) return;
    const tip = (billNum * tipNum) / 100;
    const totalAmount = billNum + tip;
    setTipAmount(tip.toFixed(2));
    setTotal(totalAmount.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Bill Amount"
        keyboardType="numeric"
        value={bill}
        onChangeText={setBill}
      />
      <TextInput
        style={styles.input}
        placeholder="Tip %"
        keyboardType="numeric"
        value={tipPercent}
        onChangeText={setTipPercent}
      />
      <Button title="Calculate Tip" onPress={calculateTip} />
      {tipAmount && total && (
        <View style={styles.resultBox}>
          <Text style={styles.result}>Tip: ₹{tipAmount}</Text>
          <Text style={styles.result}>Total: ₹{total}</Text>
        </View>
      )}
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
  resultBox: {
    marginTop: 20
  },
  result: {
    fontSize: 18,
    marginVertical: 4,
    fontWeight: 'bold'
  }
});