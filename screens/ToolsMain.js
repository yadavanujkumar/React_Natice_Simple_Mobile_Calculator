// ToolsMain.js
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const tools = [
  { title: 'Scientific Calculator', route: 'Scientific' },
  { title: 'BMI Calculator', route: 'BMI' },
  { title: 'Currency Converter', route: 'Currency' },
  { title: 'Tip Calculator', route: 'Tip' },
  { title: 'EMI Calculator', route: 'EMI' }
];

export default function ToolsMain() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tools</Text>
      {tools.map((tool, index) => (
        <Card key={index} style={styles.card} onPress={() => navigation.navigate(tool.route)}>
          <Card.Title title={tool.title} />
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 4
  }
});
