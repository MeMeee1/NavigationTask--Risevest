import {View,Text,StyleSheet,Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.text}>The Home Page</Text>
    <Pressable style={styles.navText} onPress={()=> navigation.navigate("HomeStack")}>Go To The Message Page
    </Pressable>
    <Pressable style={styles.navText} onPress={()=> navigation.navigate("HomeStack", { screen: "DetailsPage" })}>Go To The Details Page
    </Pressable>
    </View>
  );
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize: 24,
    fontWeight:"bold",
    marginBottom:16,
  },
  navText:{
    color:"white",
    backgroundColor:"lightblue",
    padding:10,
    marginBottom:10

  }

});