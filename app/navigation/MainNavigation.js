import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const MainNavigation = () => (
  <NavigationContainer
    screenOptions={{
      gestureEnabled: true,
    }}>
    <Stack.Navigator>
      <Stack.Screen name="Покемоны" component={ListScreen} />
      <Stack.Screen name="Детали" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
