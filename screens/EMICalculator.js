// EMICalculator.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../ThemeContext';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [emi, setEmi] = useState(null);
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const calculateEMI = async () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(term);
    if (!P || !R || !N) return;
    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const result = emiCalc.toFixed(2);
    setEmi(result);
    await storeHistory(P, R * 12 * 100, N, result);
  };

  const storeHistory = async (p, r, t, result) => {
    try {
      const prev = await AsyncStorage.getItem('emiHistory');
      const parsed = prev ? JSON.parse(prev) : [];
      const updated = [
        { id: Date.now(), principal: p, rate: r, term: t, emi: result },
        ...parsed.slice(0, 19)
      ];
      await AsyncStorage.setItem('emiHistory', JSON.stringify(updated));
    } catch (err) {
      console.error('Error saving history', err);
    }
  };

  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>EMI Calculator</Text>
      <TextInput
        style={themedStyles.input}
        placeholder="Principal Amount"
        placeholderTextColor={theme.placeholder}
        keyboardType="numeric"
        value={principal}
        onChangeText={setPrincipal}
      />
      <TextInput
        style={themedStyles.input}
        placeholder="Annual Interest Rate (%)"
        placeholderTextColor={theme.placeholder}
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />
      <TextInput
        style={themedStyles.input}
        placeholder="Term (in months)"
        placeholderTextColor={theme.placeholder}
        keyboardType="numeric"
        value={term}
        onChangeText={setTerm}
      />
      <Button title="Calculate EMI" onPress={calculateEMI} color={theme.button} />
      {emi && (
        <View style={themedStyles.resultBox}>
          <Text style={themedStyles.result}>Monthly EMI: ₹{emi}</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={themedStyles.menuButton}>
        <Text style={themedStyles.menuButtonText}>⬅ Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (theme) => StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: theme.background
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: theme.text
  },
  input: {
    borderColor: theme.border,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    color: theme.text
  },
  resultBox: {
    marginTop: 20
  },
  result: {
    fontSize: 18,
    marginVertical: 4,
    fontWeight: 'bold',
    color: theme.text
  },
  menuButton: {
    marginTop: 30,
    alignItems: 'center'
  },
  menuButtonText: {
    color: theme.link,
    fontSize: 16
  }
});