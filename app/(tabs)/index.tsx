import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Botao from "../../components/Botao";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Botao titulo="Clique aqui" onPress={() => alert("Botão clicado")} />
        <Botao titulo="Enviar" onPress={() => alert("Enviado")} />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});