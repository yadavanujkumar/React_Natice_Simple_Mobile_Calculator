import React, { createContext, useEffect, useState } from 'react';
import { DefaultTheme as NavigationDefault, DarkTheme as NavigationDark } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDefaultTheme = {
  ...NavigationDefault,
  colors: {
    ...NavigationDefault.colors,
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff',
    card: '#f8f8f8',
    border: '#cccccc',
    notification: '#ff453a',
  },
};

const CustomDarkTheme = {
  ...NavigationDark,
  colors: {
    ...NavigationDark.colors,
    background: '#121212',
    text: '#ffffff',
    primary: '#1f1f1f',
    card: '#1c1c1e',
    border: '#272729',
    notification: '#ff453a',
  },
};

export const ThemeContext = createContext({
  theme: CustomDefaultTheme,
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(CustomDefaultTheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      const dark = savedTheme === 'dark';
      setIsDarkMode(dark);
      setTheme(dark ? CustomDarkTheme : CustomDefaultTheme);
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const dark = !isDarkMode;
    setIsDarkMode(dark);
    setTheme(dark ? CustomDarkTheme : CustomDefaultTheme);
    await AsyncStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
