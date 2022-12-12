import { React, useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';

import api from '../../plugins/axios.js';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';
import Loading from '../../components/Loading/index.jsx';

function HomeScreen ({ navigation }) {
  function filterSearch(text) {
    if(text !== '') {
      const filteredPokemons = pokemons.filter(pokemon => {
        if(pokemon.name.toLowerCase().includes(text.toLowerCase())) {
          return pokemon;
        }
      })
      setFilteredPokemons(filteredPokemons);
    } else {
      setFilteredPokemons([]);
    }
  }

  const backgroundStyle = {
    backgroundColor: '#FFF',
  };

  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    api.get("/pokemons").then(response => {
      setPokemons(response.data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <PokemonCard
          pokemon={item}
          navigation={navigation}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Title navigation={navigation}/>
      <SearchBar filterSearch={filterSearch}/>
      <FlatList
        style={backgroundStyle}
        data={filteredPokemons.length > 0 ? filteredPokemons : pokemons}
        renderItem={renderItem}
        initialNumToRender = {20}
        maxToRenderPerBatch={30}
        keyExtractor={item => item.id.toString()}
      >
      </FlatList>
    </SafeAreaView>
  );
};

export default HomeScreen;
