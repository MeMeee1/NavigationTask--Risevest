import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="ProfilePage" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
