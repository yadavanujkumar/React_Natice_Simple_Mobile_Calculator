// ToolsScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ToolsMain from './ToolsMain';
import EMICalculator from './EMICalculator';
import BMICalculator from './BMICalculator';
import CurrencyConverter from './CurrencyConverter';
import TipCalculator from './TipCalculator';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function ToolsScreen() {
  return (
    <Stack.Navigator initialRouteName="ToolsMain">
      <Stack.Screen name="ToolsMain" component={ToolsMain} options={{ title: 'Tools' }} />
      <Stack.Screen name="EMI" component={EMICalculator} />
      <Stack.Screen name="BMI" component={BMICalculator} />
      <Stack.Screen name="Currency" component={CurrencyConverter} />
      <Stack.Screen name="Tip" component={TipCalculator} />
      <Stack.Screen name="Scientific" component={ScientificCalc} />
    </Stack.Navigator>
  );
}
