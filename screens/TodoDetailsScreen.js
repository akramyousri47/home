import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoDetailsScreen({ route, navigation }) {
  const item = route?.params;
  const { theme } = useContext(ThemeContext);

  if (!item) {
    return (
      <View style={[styles.container, theme === "dark" ? styles.dark : styles.light]}>
        <Text style={[styles.message, { color: theme === "dark" ? "#fff" : "#000" }]}>Aucune tâche sélectionnée</Text>
        <Button title="Retour" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={[styles.container, theme === "dark" ? styles.dark : styles.light]}>
      <Text style={[styles.title, { color: theme === "dark" ? "#fff" : "#000" }]}>{item.title}</Text>
      <Text style={[styles.id, { color: theme === "dark" ? "#ddd" : "#333" }]}>ID: {item.id}</Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  light: {
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "#111",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
  },
  id: {
    fontSize: 14,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
