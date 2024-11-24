import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from './Screens/Hello';
import HelloTwo from './Screens/HelloTwo';
import HelloThree from './Screens/HelloThree';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ title: "", headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name="Home" component={Hello} />
      <Stack.Screen name="HomeTwo" component={HelloTwo} />
      <Stack.Screen name="HomeThree" component={HelloThree} />
    </Stack.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      {StackNavigation()}
    </NavigationContainer>
  );
}

