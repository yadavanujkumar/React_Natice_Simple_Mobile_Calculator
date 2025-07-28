import React from 'react';
import { ThemeProvider } from './ThemeContext';
import MainTabs from './MainTabs';

export default function App() {
  return (
    <ThemeProvider>
      <MainTabs />
    </ThemeProvider>
  );
}
