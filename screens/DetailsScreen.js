import {View,Text,StyleSheet,Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function DetailsScreen({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.text}>The Details Page</Text>
    
   
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
  }

});