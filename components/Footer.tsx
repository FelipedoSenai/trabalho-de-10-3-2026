import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2026 Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0056b3",
    padding: 15,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});