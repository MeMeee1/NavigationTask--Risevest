import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Profile Page</Text>
      
      <Pressable style={styles.button} onPress={() => navigation.navigate("MainPage")}>
        <Text style={styles.buttonText}>Go To The Main Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f9fc", // Light background for readability
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Dark text for contrast
  },
  button: {
    backgroundColor: "#FF6347", // Tomato color for the button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    width: 200, // Uniform button width
  },
  buttonText: {
    color: "white", // White text for contrast
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
