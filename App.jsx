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
import { SvgUri } from 'react-native-svg';
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
import PokeballCard from './src/assets/svg-icons/pokeball.svg'
import DotsCard from './src/assets/svg-icons/pattern.svg'

const getCardColor = (props) => {
  return props.pokemon.types.length == 2
    ? props.pokemon.types[1].name
    : props.pokemon.types[0].name
}
const PokemonCard = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Card containerStyle={pokemonCardStyles(getCardColor(props)).pokemonCard}>
          <DotsCard width={110} height={40} style={pokemonCardStyles().dotsBackground}/>
          <PokeballCard width={150} height={150} style={pokemonCardStyles().pokeballBackground} PokeballCard/>
          <View style={{flexDirection:'row'}}>
            <View style={{marginStart: 10}}>
              <Text style={pokemonCardStyles().pokemonCardId}>{props.pokemon.id.toString().length == 1 ? '#00' 
                : props.pokemon.id.toString().length == 2 
                ? '#0' : '#'}{props.pokemon.id}
              </Text>
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
              <SvgUri
                style={pokemonCardStyles().pokemonImage}
                width="150"
                height="150"
                uri={props.pokemon.images.svgs.front_default}
              ></SvgUri>
              {/* <Image source={{uri: props.pokemon.images.artwork}} style={styles().pokemonImage} /> */}
            </View>
          </View>
        </Card>
      </TouchableOpacity>
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
    axios.get("http://18.231.114.18:3000/pokemons").then(response => {
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
        bounces={true}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Title/>
        <SearchBar/>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {pokemons.map(pokemon=>{
            return <View key={pokemon.id} style={{marginBottom: -15}}>
              <PokemonCard pokemon={pokemon}/>
            </View> 
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

import { styles } from './src/styles/styles';
import { pokemonCardStyles } from './src/styles/pokemonCardStyles';

export default App;
