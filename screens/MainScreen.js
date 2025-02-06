import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
      <Pressable style={styles.navText} onPress={() => navigation.navigate("MainStack")}>
        Go To The Home Page
      </Pressable>
      <Pressable style={styles.navText} onPress={() => navigation.navigate("MainStack", { screen: "ProfilePage" })}>
        Go To The Profile Page
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  navText: {
    color: "white",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 10,
  },
});
