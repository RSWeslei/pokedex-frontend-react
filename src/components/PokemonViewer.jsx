import {
  Text,
  Image,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import kgToLbs from '../utils/converter';
import { PokemonInfo } from './Home';
import { React, useState, useEffect } from 'react';
import api from '../plugins/axios.js';
import typesSvgs from '../assets/type-icons/typesSvgs.js';
import typesColors from '../styles/typesColors';

const About = (props) => {
  return (
    <View style={pokemonView().aboutCard}>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Sobre</Text>
      <Text lineBreakMode='true' style={pokemonView().description}>
        {props.pokemon.description}
      </Text>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Pokedex Dados</Text>
      <View style={pokemonView().pokemonData}>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Especie:</Text>
          <Text style={pokemonView().pokemonDataText}>100</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Altura:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${Number(props.pokemon.height).toFixed(1)}m`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Peso:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${Number(props.pokemon.weight).toFixed(1) }kg (${kgToLbs(props.pokemon.weight)} lbs)`}</Text>
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

const BasicStats = (props) => {
  let types = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let types2 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <View style={statusStyles().statusCard}>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Status Basicos</Text>
      <View>
        <BasicStat
          name={'HP'}
          stat={props.pokemon.stat.hp}
          maxValue={294}
          type={getBackgroundColor(props)}
        />
        <BasicStat
          name={'Ataque'}
          stat={props.pokemon.stat.attack}
          maxValue={216}
          type={getBackgroundColor(props)}
        />
        <BasicStat
          name={'Defesa'}
          stat={props.pokemon.stat.defense}
          maxValue={216}
          type={getBackgroundColor(props)}
        />
        <BasicStat
          name={'Sp. Ataque'}
          stat={props.pokemon.stat.specialAttack}
          maxValue={251}
          type={getBackgroundColor(props)}
        />
        <BasicStat
          name={'Sp. Defesa'}
          stat={props.pokemon.stat.specialDefense}
          maxValue={251}
          type={getBackgroundColor(props)}
        />
        <BasicStat
          name={'Velocidade'}
          stat={props.pokemon.stat.speed}
          maxValue={207}
          type={getBackgroundColor(props)}
        />
      </View>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Tipos de Defesas</Text>
      <Text style={statusStyles(getBackgroundColor(props)).statusSubtitle}>{`A eficacia de cada tipo no ${props.pokemon.name}`}</Text>
      <View style={[statusStyles().defensesTypesContainer]}>
        {types2.map(type => (
          <View key={type}>
            <View style={statusStyles(typesColors(type)).defensesTypes}>
              {typesSvgs(type, width = 30, height = 30)}
            </View>
            <Text style={statusStyles().typeDefenseText}>
              {getDefense(props, type)}
            </Text>
          </View>
        ))}
      </View>
      <View style={statusStyles().defensesTypesContainer}>
        {types.map(type => (
          <View key={type}>
            <View style={statusStyles(typesColors(type)).defensesTypes}>
              {typesSvgs(type, width = 30, height = 30)}
            </View>
            <Text style={statusStyles().typeDefenseText}>
              {getDefense(props, type)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

import Arrow from '../assets/svg-icons/arrow.svg'
import PokeballFull from '../assets/svg-icons/pokeballFullColor.svg'
const Evolutions = (props) => {
  return (
    <View style={evolutionStyles().evolutionsCard}>
      <Text style={pokemonView(getBackgroundColor(props)).titles}>Evolucoes</Text>
      <View style={evolutionStyles().evolutionToContainer}>
        <EvolutionPokemon pokemon={props.pokemon}/>
        <Arrow width={30} height={30} style={evolutionStyles().arrow}></Arrow>
        <EvolutionPokemon pokemon={props.pokemon}/>
      </View>
      <View style={evolutionStyles().evolutionToContainer}>
        <EvolutionPokemon pokemon={props.pokemon}/>
        <Arrow width={30} height={30} style={evolutionStyles().arrow}></Arrow>
        <EvolutionPokemon pokemon={props.pokemon}/>
      </View>
    </View>
  )
}

const EvolutionPokemon = (props) => {
  return (
    <View style={evolutionStyles().evolutionTo}>
      <PokeballFull width={130} height={130} style={evolutionStyles().pokeball}/>
      <Image source={{ uri: props.pokemon.images.artwork }} style={evolutionStyles().pokemonImage} />
      <Text style={{fontStyle: 'italic', marginTop: 10, fontSize: 15}}>{props.pokemon.id.toString().length == 1 ? '#00'
        : props.pokemon.id.toString().length == 2
          ? '#0' : '#'}{props.pokemon.id}
      </Text>
      <Text style={evolutionStyles().pokemonName}>{props.pokemon.name}</Text>
    </View>
  )
}

const BasicStat = (props) => {
  return (
    <View style={statusStyles().basicStatus}>
      <Text style={statusStyles().basicStatusTitle}>{props.name}</Text>
      <Text style={statusStyles().basicStatusText}>{Math.floor(props.stat)}</Text>
      <View
        style={statusStyles().basicStatusBar}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            statusStyles(
              props.type,
              value = props.stat, props.maxValue).basicStatusBarFill
          ]}
        />
      </View>
      <Text style={statusStyles().maxStatValue}>{props.maxValue}</Text>
    </View>
  )
}

const getBackgroundColor = (props) => {
  return props.pokemon.types.length == 2
    ? props.pokemon.types[1].name
    : props.pokemon.types[0].name
}

const getDefense = (props, type) => {
  let effectiveness = props.typesDefense.find((typeDefense) => typeDefense.idType == type)?.value
  if (effectiveness == 0) {
    return null
  } else if (effectiveness == 0.25) {
    return '1/4'
  }
  else if (effectiveness == 0.5) {
    return '1/2'
  }
  else if (effectiveness == 2) {
    return '2'
  }
  else if (effectiveness == 4) {
    return '4'
  }
  else {
    return null
  }
}

import CirclePokemon from '../assets/svg-icons/circle.svg'
import DotsPattern from '../assets/svg-icons/dotsPattern.svg'
import Pokeball from '../assets/svg-icons/pokeballFull.svg'

function PokemonViewer({ route, navigation }) {
  let [selectMenu, setSelectMenu] = useState(1);

  const [isLoading, setLoading] = useState(true);
  const [typesDefense, setTypesDefense] = useState();

  let types = []
  route.params.pokemon.types.forEach(type => {
    types.push(type.id)
  });

  useEffect(() => {
    api.post("/type-damages", { types: types }).then(response => {
      setTypesDefense(response.data);
      setLoading(false);
      console.log('response.data');
    });
  }, []);

  if (isLoading) {
    return <Text className="App">Loading...</Text>;
  }

  return (
    <View
      style={pokemonView(getBackgroundColor(route.params)).mainContainer}
    >
      <TouchableOpacity
        style={pokemonView().backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={pokemonView().backButton}>
          <Text style={pokemonView().backButtonText}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <View style={pokemonView().pokemonNameBackgroundContainer}>
        <GradientText
          style={pokemonView().pokemonNameBackground}
        >
          {route.params.pokemon.name.toUpperCase()}
        </GradientText>
      </View>
      <DotsPattern width={60} height={60} style={pokemonView().dotsPokemonBackground} />
      <View style={pokemonView().pokemonView}>
        <CirclePokemon width={150} height={150} style={pokemonView().circlePokemonBackground} />
        <Image source={{ uri: route.params.pokemon.images.artwork }} style={pokemonView().pokemonImage} />
        <PokemonInfo pokemon={route.params.pokemon}></PokemonInfo>
      </View>
      <View style={pokemonView().menuContainer}>
        <TouchableOpacity
          onPress={() => setSelectMenu(1)}
          hitSlop={{ top: 15, bottom: 15, left: 30, right: 30 }}
        >
          {selectMenu == 1 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon} /> : null}
          <Text style={pokemonView(selectMenu == 1).menuTitle}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectMenu(2)}
          hitSlop={{ top: 15, bottom: 15, left: 30, right: 30 }}
        >
          {selectMenu == 2 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon} /> : null}
          <Text style={pokemonView(selectMenu == 2).menuTitle}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectMenu(3)}
          hitSlop={{ top: 15, bottom: 15, left: 30, right: 30 }}
        >
          {selectMenu == 3 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon} /> : null}
          <Text style={pokemonView(selectMenu == 3).menuTitle}>Evolucao</Text>
        </TouchableOpacity>
      </View>
      <View style={pokemonView().viewCard}>
        {selectMenu == 1 ? <About pokemon={route.params.pokemon} /> : null}
        {selectMenu == 2 ? <BasicStats typesDefense={typesDefense} pokemon={route.params.pokemon} /> : null}
        {selectMenu == 3 ? <Evolutions pokemon={route.params.pokemon} /> : null}
      </View>
    </View>
  );
}

import GradientText from '../utils/TextGradient';

import { evolutionStyles } from '../styles/pokemonViewEvolution';
import { pokemonView } from '../styles/pokemonView';
import { statusStyles } from '../styles/pokemonViewStatus';
export default PokemonViewer;