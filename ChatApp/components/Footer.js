import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,View,Text } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
     <View><Ionicons name="chatbubble" size={24} color="black" /><Text>Chat</Text></View>
      <View><Ionicons name="people" size={24} color="black" /><Text>Group</Text></View>
      <View><Ionicons name="call" size={24} color="black" /><Text>Call</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
});
