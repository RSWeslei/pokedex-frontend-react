import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import HomeScreen from "./src/pages/Home";
import PokemonViewer from "./src/pages/PokemonViewer";
import Favorites from './src/pages/Favorites';
import SignUp from './src/pages/SignUp/index.jsx';

function App() {
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Drawer.Screen name="Pokemons" component={HomeStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

};

const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonViewer" component={PokemonViewer} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

export default App;
