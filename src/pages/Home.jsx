import { React, useState, useEffect } from 'react';
// import api from '../plugins/axios.js';
import api from '../plugins/axios.js';
import { SvgUri } from 'react-native-svg';
import { Node } from 'react';

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
import { Colors } from 'react-native/Libraries/NewAppScreen';

import typesSvgs from '../assets/type-icons/typesSvgs.js';
import PokeballCard from '../assets/svg-icons/pokeball.svg'
import DotsCard from '../assets/svg-icons/pattern.svg'

const Title = () => {
  return (
    <View style={styles().title}>
      {/*<Text style={styles().titleText}>PokedexApp</Text>*/}
      <Image source={require('../assets/logo.png')} style={styles().titleLogo} />
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

const getCardColor = (props) => {
  return props.pokemon.types.length == 2
    ? props.pokemon.types[1].name
    : props.pokemon.types[0].name
}

const PokemonCard = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {
          props.navigation.navigate('PokemonViewer', {
            pokemon: props.pokemon
          })
        }
      }>
        <Card containerStyle={pokemonCardStyles(getCardColor(props)).pokemonCard}>
          <DotsCard width={110} height={40} style={pokemonCardStyles().dotsBackground} />
          <PokeballCard width={150} height={150} style={pokemonCardStyles().pokeballBackground} PokeballCard />
          <View style={{ flexDirection: 'row' }}>
            <PokemonInfo pokemon={props.pokemon} />
            <View style={{ marginLeft: 'auto' }}>
              {/* <SvgUri
                style={pokemonCardStyles().pokemonImage}
                width="150"
                height="150"
                uri={props.pokemon.images.svgs.front_default}
              ></SvgUri> */}
              <Image source={{ uri: props.pokemon.images.artwork }} style={styles().pokemonImage} />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const PokemonInfo = (props) => {
  return (
    <View style={{ marginStart: 10 }}>
      <Text style={pokemonCardStyles().pokemonCardId}>{props.pokemon.id.toString().length == 1 ? '#00'
        : props.pokemon.id.toString().length == 2
          ? '#0' : '#'}{props.pokemon.id}
      </Text>
      <Card.Title style={pokemonCardStyles().pokemonCardName}>{props.pokemon.name}</Card.Title>
      <View style={{ flexDirection: "row", alignContent: 'space-between' }}>
        {props.pokemon.types.map(type => (
          <TouchableOpacity
            key={type.id}
            title={type.name}
            style={pokemonCardStyles(type.color).pokemonCardTypeButton}
            titleStyle={{ color: 'white' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {typesSvgs(type.id, pokemonCardStyles().pokemonCardTypeIcon, width = 20, height = 20)}
              <Text style={pokemonCardStyles().pokemonCardTypeText}>{type.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function HomeScreen ({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
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

import { styles } from '../styles/styles';
import { pokemonCardStyles } from '../styles/pokemonCardStyles';

export default HomeScreen;
export { PokemonInfo };
