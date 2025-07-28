// MainTabs.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ToolsScreen from './screens/ToolsScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import EMICalculator from './screens/EMICalculator';
import ToolsStack from './screens/ToolsStack';
import { ThemeContext } from './ThemeContext';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'calculator';
                break;
              case 'Tools':
                iconName = 'tools';
                break;
              case 'History':
                iconName = 'history';
                break;
              case 'Settings':
                iconName = 'cog';
                break;
              case 'EMI':
                iconName = 'credit-card-multiple';
                break;
              case 'More Tools':
                iconName = 'wrench';
                break;
              default:
                iconName = 'apps';
            }

            return (
              <MaterialCommunityIcons name={iconName} size={size} color={color} />
            );
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tools" component={ToolsScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="EMI" component={EMICalculator} />
        <Tab.Screen name="More Tools" component={ToolsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
