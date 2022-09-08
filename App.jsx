/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React, useState, useEffect} from 'react';
// import api from './src/plugins/axios.js';
import axios from 'axios';
import {Node} from 'react';;

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextCard, Card, Button, Icon } from 'react-native-elements';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Title = () => {
  return (
    <View style={styles().title}>
      <Text style={styles().titleText}>PokedexApp</Text>
      <Image source={require('./src/assets/icon.png')} style={styles().titleLogo} />
      <View style={styles().titleIcons}>
        <Icon 
          name="apps-outline"
          type='ionicon'
        >
          <Button></Button>
        </Icon>
        <Icon 
          name="swap-vertical-outline"
          type='ionicon'
        >
          <Button></Button>
        </Icon>
        <Icon 
          name="options-outline"
          type='ionicon'
        >
          <Button></Button>
        </Icon>
      </View>
    </View>
  );
}

const SearchBar = () => {
  return (
    <View style={styles().searchBar}>
      <TextInput
        style={styles().searchBarInput}
        placeholder="Search pokemon"
      />
    </View>
  );
}
import typesSvgs from './src/assets/type-icons/typesSvgs.js';
const PokemonCard = (props) => {
  return (
    <View>
      <Card containerStyle={pokemonCardStyles().pokemonCard}>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={pokemonCardStyles().pokemonCardId}>{props.pokemon.id.toString().length == 1 ? '#00' 
              : props.pokemon.id.toString().length == 2 
              ? '#0' : '#'}{props.pokemon.id}</Text>
            <Card.Title style={pokemonCardStyles().pokemonCardName}>{props.pokemon.name}</Card.Title>
            <View style={{flexDirection:"row", alignContent: 'space-between'}}>
              {props.pokemon.types.map(type => (
                <TouchableOpacity 
                    key={type.id}
                    title={type.name} 
                    style={pokemonCardStyles(type.color).pokemonCardTypeButton} 
                    titleStyle={{color:'white'}}
                  >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {typesSvgs(type.id, pokemonCardStyles().pokemonCardTypeIcon, width=20, height=20)}
                      <Text style={pokemonCardStyles().pokemonCardTypeText}>{type.name}</Text>
                    </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Image source={{uri: props.pokemon.images.artwork}} style={pokemonCardStyles().pokemonImage} />
          </View>
        </View>
      </Card>
    </View>
  );
}

function App () {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    axios.get("http://18.230.58.83:3000/pokemons").then(response => {
      setPokemons(response.data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Text className="App">Loading...</Text>;
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Title/>
        <SearchBar/>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {pokemons.map(pokemon=>{
            return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

import { styles } from './src/styles/styles.js';
import { pokemonCardStyles } from './src/styles/pokemonCardStyles.js';

export default App;
