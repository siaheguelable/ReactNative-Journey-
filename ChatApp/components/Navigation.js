import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,Button } from 'react-native';


export default function Navigation() {
  return (
    <View style={[styles.container, styles.marginTop]}>
      <View style={{ flex: 1 }}><Text>ChatApp</Text></View>
      <View style={{ flex: 1 }}><Ionicons name="camera" size={24} color="black" /></View>
      <View style={{ flex: 1 }}><Ionicons name="search" size={24} color="black" /></View>
      <View>
      <TouchableOpacity onPress={handlePress} style={{ padding: 10 }}>
        <Ionicons name="person" size={24} color="black" />
      </TouchableOpacity>
    </View>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 10,
    marginTop: 40,

  },
});
