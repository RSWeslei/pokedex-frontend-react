import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextArea,
    useColorScheme,
    Image,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import kgToLbs from '../utils/converter';
import { PokemonInfo } from './Home';
import { useState } from 'react';

const About = (props) => {
  return (
    <View style={pokemonView().aboutCard}>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Sobre</Text>
      <Text lineBreakMode='true' style={pokemonView().description}>
        Bulbasaur pode ser visto cochilando sob a luz do sol. 
        Ha uma semente em suas costas.
        Ao absorver os raios do sol, a semente cresce progressivamente.
      </Text>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Pokedex Dados</Text>
      <View style={pokemonView().pokemonData}>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Especie:</Text>
          <Text style={pokemonView().pokemonDataText}>100</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Altura:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${props.pokemon.height / 10}m`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Peso:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${props.pokemon.weight / 10}kg (${kgToLbs(props.pokemon.weight)} lbs)`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Abilidades:</Text>
          <Text style={pokemonView().pokemonDataText}>
            {props.pokemon?.abilities.map((ability, index) => {
              return (
                <Text 
                  key={ability.id} 
                  style={pokemonView().pokemonDataText}
                >
                  {`${index + 1} - ${ability.name}`}
                </Text>
              );
            })}
          </Text>
        </View>
      </View>
    </View>
  )
}

const getBackgroundColor = (props) => {
  return props.pokemon.types.length == 2
    ? props.pokemon.types[1].name
    : props.pokemon.types[0].name
}

import CirclePokemon from '../assets/svg-icons/circle.svg'
import DotsPattern from '../assets/svg-icons/dotsPattern.svg'
import Pokeball from '../assets/svg-icons/pokeballFull.svg'

function PokemonViewer ({route, navigation}) {
  let [selectMenu, setSelectMenu] = useState(1);
  return (
    <View
      style={pokemonView(getBackgroundColor(route.params)).mainContainer}
    >
      <View style={pokemonView().pokemonNameBackgroundContainer}>
        <GradientText
          style={pokemonView().pokemonNameBackground}
        >
          {route.params.pokemon.name.toUpperCase() }
        </GradientText>
      </View>
      <DotsPattern width={60} height={60} style={pokemonView().dotsPokemonBackground}/>
      <View style={pokemonView().pokemonView}>
        <CirclePokemon width={150} height={150} style={pokemonView().circlePokemonBackground}/>
        <Image source={{ uri: route.params.pokemon.images.artwork }} style={pokemonView().pokemonImage} />
        <PokemonInfo pokemon={route.params.pokemon}></PokemonInfo>
      </View>
      <View style={pokemonView().viewCard}>
        <View style={pokemonView().menuContainer}>
          <TouchableOpacity
            onPress={() => setSelectMenu(1)}
            hitSlop={{top: 15, bottom: 15, left: 30, right: 30}}
          >
            {selectMenu == 1 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon}/> : null}
            <Text style={pokemonView(selectMenu == 1).menuTitle}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectMenu(2)}
            hitSlop={{top: 15, bottom: 15, left: 30, right: 30}}
          >
            {selectMenu == 2 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon}/> : null}
            <Text style={pokemonView(selectMenu == 2).menuTitle}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectMenu(3)}
            hitSlop={{top: 15, bottom: 15, left: 30, right: 30}}
          >
            {selectMenu == 3 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon}/> : null}
            <Text style={pokemonView(selectMenu == 3).menuTitle}>Evolucao</Text>
          </TouchableOpacity>
        </View>
        <About pokemon={route.params.pokemon}/>
      </View>
    </View>
  );
}

import GradientText from '../utils/TextGradient';

import { pokemonView } from '../styles/pokemonView';
export default PokemonViewer;