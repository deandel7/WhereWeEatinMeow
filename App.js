import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStack, LoginStack} from './navigation/stack';
import { MyDrawer } from './navigation/drawer';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar style='light'/>
    </NavigationContainer>

    
  );
}
