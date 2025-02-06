import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
      
      <Pressable style={styles.button} onPress={() => navigation.navigate("MainStack")}>
        <Text style={styles.buttonText}>Go To The Home Page</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("MainStack", { screen: "ProfilePage" })}>
        <Text style={styles.buttonText}>Go To The Profile Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa", // Light background for contrast
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Dark text for readability
  },
  button: {
    backgroundColor: "#000", // Black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    width: 220, // Set button width for uniformity
  },
  buttonText: {
    color: "white", // White text for contrast
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
