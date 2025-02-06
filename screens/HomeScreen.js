import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Home Page</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("HomeStack")}>
        <Text style={styles.buttonText}>Go To The Message Page</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("HomeStack", { screen: "DetailsPage" })}>
        <Text style={styles.buttonText}>Go To The Details Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f4f8", // Light background for contrast
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF", // Blue background
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    width: 220, // Set uniform width
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
