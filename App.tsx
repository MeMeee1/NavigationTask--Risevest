import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { Button, View, Text } from 'react-native';  

// Create stack and tab navigators  
const Stack = createStackNavigator();  
const Tab = createBottomTabNavigator();  

// Home Screen Component  
const HomeScreen = ({ navigation }) => (  
  <View style={styles.screenContainer}>  
    <Text>Home Screen</Text>  
    <Button title="Go to Feed" onPress={() => navigation.navigate('FeedTabs')} />  
    <Button title="Go to Messages" onPress={() => navigation.navigate('FeedTabs', { screen: 'Messages' })} />

  </View>  
);  

// Profile Screen Component  
const ProfileScreen = () => (  
  <View style={styles.screenContainer}>  
    <Text>Profile Screen</Text>  
  </View>  
);  

// Feed Screen Component  
const FeedScreen = ({ navigation }) => (  
  <View style={styles.screenContainer}>  
    <Text>Feed Screen</Text>  
    <Button title="Back to Home" onPress={() => navigation.navigate('HomeTabs')} />  
  </View>  
);  

// Messages Screen Component  
const MessagesScreen = ({ navigation }) => (  
  <View style={styles.screenContainer}>  
    <Text>Messages Screen</Text>  
    <Button title="Back to Home" onPress={() => navigation.navigate('HomeTabs')} />  
  </View>  
);  

// Home Tabs Navigator  
const HomeTabs = () => (  
  <Tab.Navigator>  
    <Tab.Screen name="Home" component={HomeScreen} />  
    <Tab.Screen name="Profile" component={ProfileScreen} />  
  </Tab.Navigator>  
);  

// Feed Tabs Navigator  
const FeedTabs = () => (  
  <Tab.Navigator>  
    <Tab.Screen name="Feed" component={FeedScreen} />  
    <Tab.Screen name="Messages" component={MessagesScreen} />  
  </Tab.Navigator>  
);  

// Main App Component  
const App = () => (  
  <NavigationContainer>  
    <Stack.Navigator screenOptions={{ headerShown: false }}>  
      <Stack.Screen name="HomeTabs" component={HomeTabs} />  
      <Stack.Screen name="FeedTabs" component={FeedTabs} />  
    </Stack.Navigator>  
  </NavigationContainer>  
);  

// Styles  
const styles = {  
  screenContainer: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
};  

export default App;