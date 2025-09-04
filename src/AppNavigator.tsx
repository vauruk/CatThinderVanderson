import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CatTinderScreen from './views/CatTinderScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CatTinder" component={CatTinderScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
