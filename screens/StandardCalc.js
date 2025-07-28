// screens/StandardCalc.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Vibration,
} from 'react-native';

const StandardCalc = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    Vibration.vibrate(10);

    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(input.replace('×', '*').replace('÷', '/'));
        setResult(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const renderButton = (val, color = '#333') => (
    <TouchableOpacity
      key={val}
      style={[styles.button]}
      onPress={() => handlePress(val)}
    >
      <Text style={[styles.buttonText, { color }]}>{val}</Text>
    </TouchableOpacity>
  );

  const buttons = [
    ['C', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => renderButton(btn, btn === '=' ? '#ff9500' : '#333'))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default StandardCalc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 36,
    color: '#000',
  },
  result: {
    fontSize: 24,
    color: 'gray',
  },
  buttons: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '600',
  },
});
