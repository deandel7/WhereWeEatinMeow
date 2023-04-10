import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/login-screen';
import SignupScreen from '../screens/login/signup-screen';
import PreferencesScreen from '../screens/preferences/preferences-screen';
import SearchSummaryScreen from '../screens/search-summary/search-summary-screen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();


export const LoginStack = () => {
    const navigation = useNavigation()
    return (
      <Stack.Navigator
        screenOptions={()=>navOptions(navigation)}
      >
        <Stack.Screen options={{headerShown: false}}name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}}name="Signup" component={SignupScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
      </Stack.Navigator>
    );
  }

  export const PreferencesStack = () => {
    const navigation = useNavigation()
    return (
      <Stack.Navigator
        screenOptions={()=>navOptions(navigation)}
      >
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
      </Stack.Navigator>
    );
  }

  export const SearchSummaryStack = () => {
    const navigation = useNavigation()
    return (
      <Stack.Navigator
        screenOptions={()=>navOptions(navigation)}
      >
        <Stack.Screen name="Search Summary" component={SearchSummaryScreen} />
      </Stack.Navigator>
    );
  }

  export const SearchHistoryStack = () => {
    const navigation = useNavigation()
    return (
      <Stack.Navigator
        screenOptions={()=>navOptions(navigation)}
      >
        <Stack.Screen name="Search History" component={SearchSummaryScreen} />
      </Stack.Navigator>
    );
  }


