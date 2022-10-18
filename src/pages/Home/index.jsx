import { React, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

import api from '../../plugins/axios.js';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';

function HomeScreen ({ navigation }) {
  const backgroundStyle = {
    backgroundColor: '#FFF',
  };

  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    api.get("/pokemons").then(response => {
      setPokemons(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        bounces={true}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Title/>
        <SearchBar/>
        <View
          style={backgroundStyle}>
          {pokemons.map(pokemon => {
            return <View key={pokemon.id} style={{ marginBottom: -15 }}>
              <PokemonCard
                pokemon={pokemon}
                navigation={navigation}
              />
            </View>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
