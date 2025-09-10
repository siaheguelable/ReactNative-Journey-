import React from "react";
import ChatScreen from "./Chat";
import { View } from "react-native";

import LogIn from "../LogIn";
import { useAuth } from "../context/AuthContext"; // Import your auth context

export default function HomeScreen() {
  const { user } = useAuth(); // Get user from context

  return <View style={{ flex: 1 }}>{user ? <ChatScreen /> : <LogIn />}</View>;
}

// Conditionally render based on authentication status
