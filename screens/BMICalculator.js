// BMICalculator.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return;

    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setStatus('Underweight');
    else if (bmiValue < 25) setStatus('Normal');
    else if (bmiValue < 30) setStatus('Overweight');
    else setStatus('Obese');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} />
      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
          <Text style={[styles.statusText, statusColor(status)]}>{status}</Text>
        </View>
      )}
    </View>
  );
}

const statusColor = (status) => {
  switch (status) {
    case 'Underweight': return { color: 'blue' };
    case 'Normal': return { color: 'green' };
    case 'Overweight': return { color: 'orange' };
    case 'Obese': return { color: 'red' };
    default: return { color: 'black' };
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8
  },
  resultContainer: {
    marginTop: 20
  },
  resultText: {
    fontSize: 20
  },
  statusText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  }
});
