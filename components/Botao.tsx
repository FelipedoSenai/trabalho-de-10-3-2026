import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface BotaoProps {
  titulo: string;
  onPress?: () => void;
}

export default function Botao({ titulo, onPress }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0047AB",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: 200,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});