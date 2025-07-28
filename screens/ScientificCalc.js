import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Vibration,
} from 'react-native';

export default function ScientificCalc() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const constants = {
    π: Math.PI.toFixed(8),
    e: Math.E.toFixed(8),
  };

  const functions = {
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
    tan: (x) => Math.tan(x),
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x),
    '√': (x) => Math.sqrt(x),
    'x²': (x) => x * x,
  };

  const handlePress = (val) => {
    Vibration.vibrate(10);

    if (val === 'C') {
      setInput('');
      setResult('');
    } else if (val === '=') {
      try {
        const evaluated = eval(input.replace(/×/g, '*').replace(/÷/g, '/'));
        setResult(evaluated.toString());
      } catch {
        setResult('Error');
      }
    } else if (constants[val]) {
      setInput((prev) => prev + constants[val]);
    } else if (functions[val]) {
      try {
        const num = parseFloat(input);
        if (!isNaN(num)) {
          const output = functions[val](num);
          setResult(output.toFixed(6).toString());
        } else {
          setResult('Err');
        }
      } catch {
        setResult('Err');
      }
    } else {
      setInput((prev) => prev + val);
    }
  };

  const renderButton = (val) => (
    <TouchableOpacity
      key={val}
      style={styles.button}
      onPress={() => handlePress(val)}
    >
      <Text style={styles.buttonText}>{val}</Text>
    </TouchableOpacity>
  );

  const sciBtns = [
    ['sin', 'cos', 'tan', '√'],
    ['log', 'ln', 'x²', 'π'],
    ['e', '%', 'C', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '=',],
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {sciBtns.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map(renderButton)}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 32,
    color: '#000',
  },
  result: {
    fontSize: 24,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
  button: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
    backgroundColor: '#e0e0e0',
    elevation: 2,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
  },
});
