// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';

const buttons = [
  ['C', 'DEL', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '']
];

export default function HomeScreen() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = async (val) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (val === 'C') {
      setExpression('');
      setResult('');
    } else if (val === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else if (val === '=') {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        await saveToHistory(expression, evalResult);
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(expression + val);
    }
  };

  const saveToHistory = async (exp, res) => {
    try {
      const prev = await AsyncStorage.getItem('history');
      const parsed = prev ? JSON.parse(prev) : [];
      parsed.unshift({ expression: exp, result: res, timestamp: Date.now() });
      await AsyncStorage.setItem('history', JSON.stringify(parsed));
    } catch (e) {
      console.log('Failed to save history', e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.display}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn, j) => (
              <TouchableOpacity
                key={j}
                style={styles.button}
                onPress={() => handlePress(btn)}
                disabled={!btn}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  display: { flex: 1, padding: 20 },
  expression: { fontSize: 36, color: '#aaa', textAlign: 'right' },
  result: { fontSize: 48, color: '#fff', textAlign: 'right', marginTop: 10 },
  buttonsContainer: { padding: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  button: { padding: 20, backgroundColor: '#222', borderRadius: 10, flex: 1, margin: 5 },
  buttonText: { color: '#fff', fontSize: 24, textAlign: 'center' }
});