import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

import Navigation from '../components/Navigation';
import Conversation from '../components/Conversation';

import Footer from '../components/Footer';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Navigation />

      <Conversation />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
});
