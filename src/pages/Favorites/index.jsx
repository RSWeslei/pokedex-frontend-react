import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import apiFetch from '../../plugins/fetch'

import PokemonCard from '../../components/PokemonCard';
import Loading from '../../components/Loading';
import Title from '../../components/Title';
import { StatusBar } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Text from '../../utils/TextSF';

const backgroundStyle = {
  backgroundColor: '#FFF',
  height: '100%',
};

function Favorites({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      let options = {
        method: 'GET',
      }
      const response = await apiFetch('/favorites-by-user', options);
      const json = await response.json()
      setFavorites(json.data);
      setLoading(false);
    }
    loadFavorites();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (!favorites.length) {
    console.log('Nenhum favorito encontrado');
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Title navigation={navigation} />
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25 }}>You don't have any favorites yet</Text>
      </SafeAreaView>
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
      <Title navigation={navigation} />
      <FlatList
        style={backgroundStyle}
        data={favorites}
        renderItem={renderItem}
        initialNumToRender={20}
        maxToRenderPerBatch={30}
        keyExtractor={item => item.id.toString()}
      >
      </FlatList>
    </SafeAreaView>

  )
}

export default Favorites;