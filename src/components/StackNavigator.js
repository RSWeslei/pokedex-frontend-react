import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home';
import PokemonViewer from './PokemonViewer';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonViewer" component={PokemonViewer}/>
    </Stack.Navigator>
  );
}

export default StackNavigator;