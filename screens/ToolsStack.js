// screens/ToolsStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ToolsScreen from './ToolsScreen';
import EMICalculator from './EMICalculator';
import BMICalculator from './BMICalculator';
import CurrencyConverter from './CurrencyConverter';
import TipCalculator from './TipCalculator';
import ScientificCalc from './ScientificCalc';

const Stack = createStackNavigator();

export default function ToolsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ToolsMain" component={ToolsScreen} options={{ title: 'Tools' }} />
      <Stack.Screen name="EMI" component={EMICalculator} />
      <Stack.Screen name="BMI" component={BMICalculator} />
      <Stack.Screen name="Currency" component={CurrencyConverter} />
      <Stack.Screen name="Tip" component={TipCalculator} />
      <Stack.Screen name="Scientific" component={ScientificCalc} />
    </Stack.Navigator>
  );
}
