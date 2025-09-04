import React from "react";
import ChatScreen from "./Chat"; // Use default import if ChatScreen is default export
import { View } from "react-native";
import SignUp from "./SignUp";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ChatScreen />
      
    </View>
  );
}
