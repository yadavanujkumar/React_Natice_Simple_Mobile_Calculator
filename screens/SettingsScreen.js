// SettingsScreen.js
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../ThemeContext';

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme, theme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  const clearHistory = async () => {
    try {
      await AsyncStorage.multiRemove(['emiHistory', 'bmiHistory']);
      Alert.alert('Success', 'All history cleared');
    } catch (err) {
      console.error('Error clearing storage', err);
      Alert.alert('Error', 'Failed to clear history');
    }
  };

  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.header}>Settings</Text>

      <View style={themedStyles.row}>
        <Text style={themedStyles.label}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => {
            toggleTheme();
            setDarkMode(!darkMode);
          }}
          thumbColor={darkMode ? theme.switchThumb : theme.switchThumb}
          trackColor={{ false: '#ccc', true: '#4f4f4f' }}
        />
      </View>

      <TouchableOpacity style={themedStyles.button} onPress={clearHistory}>
        <Text style={themedStyles.buttonText}>Clear All History</Text>
      </TouchableOpacity>

      <Text style={themedStyles.footer}>App Version: 1.0.0</Text>
      <Text style={themedStyles.footer}>© 2025 SmartCalc Inc.</Text>
    </View>
  );
}

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: theme.text,
  },
  button: {
    backgroundColor: theme.button,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: theme.placeholder,
    textAlign: 'center',
  },
});