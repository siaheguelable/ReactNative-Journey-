import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Ionicons name="chatbubble" size={28} color="#4e8cff" />
        <Text style={styles.label}>Chat</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="people" size={28} color="#4e8cff" />
        <Text style={styles.label}>Group</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="call" size={28} color="#4e8cff" />
        <Text style={styles.label}>Call</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});
