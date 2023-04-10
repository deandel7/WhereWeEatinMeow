import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PreferencesStack, SearchSummaryStack, SearchHistoryStack, LoginStack } from './stack';
import SearchSummaryScreen from '../screens/search-summary/search-summary-screen';
import PreferencesScreen from '../screens/preferences/preferences-screen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  const [showLogin, setShowLogin] = useState(true) // add state variable for Login button visibility
  
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      {showLogin && (
        <Drawer.Screen
          name="LoginStack"
          component={LoginStack}
          options={{ title: 'Login' ,drawerItemStyle: { display: 'none'}}}
        />
      )}
      <Drawer.Screen
        name="PreferencesStack"
        component={PreferencesStack}
        options={{ title: 'Preferences' }}
      />
      <Drawer.Screen
        name="SearchSummaryStack"
        component={SearchSummaryStack}
        options={{ title: 'Search Summary' }}
      />
      <Drawer.Screen
        name="SearchHistoryStack"
        component={SearchHistoryStack}
        options={{ title: 'Search History' }}
      />
    </Drawer.Navigator>
  );
};
