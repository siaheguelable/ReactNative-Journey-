import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function StartPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="gray" />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Loading...</Text>
    </View>
  );
}
