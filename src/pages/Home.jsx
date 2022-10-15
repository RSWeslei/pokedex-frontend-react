import { React, useState, useEffect } from 'react';
// import api from '../plugins/axios.js';
import api from '../plugins/axios.js';
// import { SvgUri } from 'react-native-svg';
// import { Node } from 'react';
import { Title } from '../components/Title';
import { SearchBar } from '../components/SearchBar';
import { PokemonCard } from '../components/PokemonCard';

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { styles } from '../styles/styles';
// import { pokemonCardStyles } from '../styles/pokemonCardStyles';

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
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        bounces={true}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Title />
        <SearchBar />
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
