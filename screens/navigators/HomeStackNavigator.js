import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../MessageScreen';
import DetailsScreen from '../DetailsScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MessagePage" component={MessageScreen} />
      <Stack.Screen name="DetailsPage" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
