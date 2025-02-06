import {View,Text,StyleSheet,Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function MessageScreen({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.text}>The Message Page</Text>
    
   
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