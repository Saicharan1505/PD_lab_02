import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Contact Us</Text>
      <Text style={styles.sectionText}>Email: contact@example.com</Text>
      <Text style={styles.sectionText}>Phone: +1-234-567-8901</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
