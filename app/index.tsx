import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>app_memorise</Text>
        <Text style={styles.subtitle}>
          O seu companheiro de estudos inteligente
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonPrimaryText}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => console.log("Ir para tela de cadastro em breve!")}
        >
          <Text style={styles.buttonSecondaryText}>Criar Nova Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  header: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  buttonPrimary: {
    backgroundColor: "#4A90E2",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonPrimaryText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4A90E2",
  },
  buttonSecondaryText: {
    color: "#4A90E2",
    fontSize: 18,
    fontWeight: "bold",
  },
});
