import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import MainStackNavigator from './screens/navigators/MainStackNavigator';
import HomeStackNavigator from './screens/navigators/HomeStackNavigator';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainStack" component={MainStackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="HomeStack" component={HomeStackNavigator}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
