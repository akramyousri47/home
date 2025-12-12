import { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Votre nom"
        placeholderTextColor="#cccccc"     // <-- Couleur du placeholder
        value={name}
        onChangeText={setName}
      />

      <Button title="Se connecter" onPress={() => login(name)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#222",              // <-- Beau fond sombre optionnel
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "white",                      // <-- Titre blanc
    fontWeight: "bold",
  },
  input: {
    color: "white",                      // <-- Texte blanc quand tu tapes
    borderWidth: 1,
    borderColor: "#999",                 // <-- Bordure gris clair
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});
