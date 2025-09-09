import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    // Logic to handle logout can be added here
    navigation.navigate("LogIn");
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>ChatApp</Text>
      </View>

      {/* Icons */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="camera" size={24} color="#4e8cff" style={styles.icon} />
        <Ionicons name="search" size={24} color="#4e8cff" style={styles.icon} />
        <TouchableOpacity onPress={handlePress} style={styles.profileButton}>
          <Ionicons name="person" size={24} color="#4e8cff" />
        </TouchableOpacity>

        {/* Conditional Menu */}
        {isMenuVisible && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 4,
    marginBottom: 10,
    marginTop: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  icon: {
    marginHorizontal: 10,
  },
  profileButton: {
    padding: 8,
    backgroundColor: "#e0f0ff",
    borderRadius: 50,
    marginLeft: 10,
  },
  menu: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});
