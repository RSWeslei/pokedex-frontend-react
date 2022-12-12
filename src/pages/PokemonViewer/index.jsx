import { React, useState, useEffect, useRef } from 'react'
import { Image, TouchableOpacity, View, Animated, StyleSheet } from 'react-native';
import Text from '../../utils/TextSF';

import api from '../../plugins/axios.js';
import kgToLbs from '../../utils/converter';
import GradientText from '../../utils/TextGradient';
import PokemonInfo from '../../components/PokemonInfo';
import Loading from '../../components/Loading/index.jsx';
import DefenseType, { InfoMenu } from '../../components/DefenseType/index.jsx';

import Arrow from '../../assets/svg-icons/arrow.svg';
import CirclePokemon from '../../assets/svg-icons/circle.svg';
import Pokeball from '../../assets/svg-icons/pokeballFull.svg';
import DotsPattern from '../../assets/svg-icons/dotsPattern.svg';
import PokeballFull from '../../assets/svg-icons/pokeballFullColor.svg';

import { pokemonView } from './styles';
import { statusStyles } from './styles';
import { evolutionStyles } from './styles';

const About = (props) => {
  const pokemon = props.pokemon
  return (
    <View style={pokemonView().dataContainer}>
      <Text style={pokemonView(getBackgroundColor(pokemon)).dataContainerSubtitle}>About</Text>
      <Text style={pokemonView().description} textBreakStrategy='simple'>
        {pokemon.description}
      </Text>
      <Text style={pokemonView(getBackgroundColor(pokemon)).dataContainerSubtitle}>Pokedex Data</Text>
      <View style={pokemonView().pokemonData}>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Height:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${Number(pokemon.height).toFixed(1)}m`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Weight:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${Number(pokemon.weight).toFixed(1)}kg (${kgToLbs(pokemon.weight)} lbs)`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Abilities:</Text>
          <Text style={pokemonView().pokemonDataText}>
            {pokemon?.abilities.map((ability, index) => {
              return (
                <Text
                  key={ability.id}
                  style={pokemonView().pokemonDataText}
                >
                  {`${index + 1}. ${ability.isHidden ? ability.name + ' (hidden ability)' : ability.name}\n`}
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
  const pokemon = props.pokemon

  return (
    <View style={pokemonView().dataContainer}>
      <Text style={pokemonView(getBackgroundColor(pokemon)).dataContainerSubtitle}>Basic Stats</Text>
      <View
        style={[statusStyles().statsContainer, { marginBottom: 10 }]}
      >
        <BasicStat
          name={'HP'}
          stat={pokemon.stat.hp}
          maxValue={pokemon.stat.minHp}
          type={getBackgroundColor(pokemon)}
        />
        <BasicStat
          name={'Attack'}
          stat={pokemon.stat.attack}
          maxValue={pokemon.stat.minAttack}
          type={getBackgroundColor(pokemon)}
        />
        <BasicStat
          name={'Defense'}
          stat={pokemon.stat.defense}
          maxValue={pokemon.stat.minDefense}
          type={getBackgroundColor(pokemon)}
        />
        <BasicStat
          name={'Sp. Attack'}
          stat={pokemon.stat.specialAttack}
          maxValue={pokemon.stat.minSpecialAttack}
          type={getBackgroundColor(pokemon)}
        />
        <BasicStat
          name={'Sp. Defense'}
          stat={pokemon.stat.specialDefense}
          maxValue={pokemon.stat.minSpecialDefense}
          type={getBackgroundColor(pokemon)}
        />
        <BasicStat
          name={'Speed'}
          stat={pokemon.stat.speed}
          maxValue={pokemon.stat.minSpeed}
          type={getBackgroundColor(pokemon)}
        />
      </View>
      <Text style={pokemonView(getBackgroundColor(pokemon)).dataContainerSubtitle}>Types of defenses</Text>
      <Text style={statusStyles(getBackgroundColor(pokemon)).defensesText}>{`The effectiveness of each type on the pokemon ${pokemon.name}`}</Text>
      <View style={[statusStyles().defensesTypesContainer]}>
        {/* {showInfo ? <InfoMenu defenseType={defenseType} pokemon={pokemon} position={position}/> : null} */}
        {types2.map(type => (
          <DefenseType
            defenseType={type}
            pokemon={pokemon}
            key={type}
          ></DefenseType>
        ))}
      </View>
      <View style={statusStyles().defensesTypesContainer}>
        {types.map(type => (
          <DefenseType defenseType={type} pokemon={pokemon} key={type}></DefenseType>
        ))}
      </View>
    </View>
  )
}

const Evolutions = (props) => {
  const pokemon = props.pokemon
  return (
    <View style={pokemonView().dataContainer}>
      <Text style={pokemonView(getBackgroundColor(pokemon)).dataContainerSubtitle}>Evolutions</Text>
      <View style={evolutionStyles().evolutionsCard}>
        <Evolution navigation={props.navigation} pokemon={pokemon} isFirstEvolution={true} />
        <Evolution navigation={props.navigation} pokemon={pokemon} isFirstEvolution={false} />
      </View>
    </View>
  )
}

const Evolution = (props) => {
  const pokemon = props.pokemon
  let first, second, level
  if (props.isFirstEvolution) {
    first = pokemon.evolution.firstEvolution
    second = pokemon.evolution.secondEvolution
    level = pokemon.evolution.firstEvolutionLevel
  }
  else {
    first = pokemon.evolution.secondEvolution
    second = pokemon.evolution.thirdEvolution
    level = pokemon.evolution.secondEvolutionLevel
  }
  if (!first && !second) {
    return (
      <View style={evolutionStyles().evolutionToContainer}>
        <Text style={evolutionStyles().noEvolution}>This pokemon doesn't evolve</Text>
      </View>
    )
  }
  if (!second) {
    return (
      null
    )
  }
  return (
    <View style={evolutionStyles().evolutionToContainer}>
      <EvolutionPokemon pokemon={first} navigation={props.navigation}/>
      <View>
        <Arrow width={25} height={25} style={evolutionStyles().arrow}></Arrow>
        <Text style={evolutionStyles().level}>(Level {level || '?'})</Text>
      </View>
      <EvolutionPokemon pokemon={second} navigation={props.navigation}/>
    </View>
  )
}

const EvolutionPokemon = (props) => {
  const pokemon = props.pokemon
  if (!pokemon) {
    return (
      <View style={evolutionStyles().evolutionPokemon}>
        <View style={evolutionStyles().evolutionPokemonImage}></View>
        <Text style={evolutionStyles().evolutionPokemonName}></Text>
      </View>
    )
  }
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.pop()
        props.navigation.push('PokemonViewer', { pokemonId: props.pokemon.id })
      }}
    >
      <View style={evolutionStyles().evolutionTo}>
        <PokeballFull width={130} height={130} style={evolutionStyles().pokeball} />
        <Image source={{ uri: pokemon.images.artwork }} style={evolutionStyles().pokemonImage} />
        <Text style={{ fontStyle: 'italic', marginTop: 10, fontSize: 15 }}>{pokemon.id.toString().length == 1 ? '#00'
          : pokemon.id.toString().length == 2
            ? '#0' : '#'}{pokemon.id}
        </Text>
        <Text style={evolutionStyles().pokemonName}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
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

const getBackgroundColor = (pokemon) => {
  return pokemon.types.length == 2
    ? pokemon.types[1].name
    : pokemon.types[0].name
}

function PokemonViewer({ route, navigation }) {
  let [selectMenu, setSelectMenu] = useState(1);
  const pokemonId = route.params.pokemonId
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    api.get(`/pokemons/${pokemonId}`).then(response => {
      setPokemon(response.data.data);
      setLoading(false);
    });
    // animation
    Animated.timing(translateX, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <View
      style={pokemonView(getBackgroundColor(pokemon)).mainContainer}
    >
      <DotsPattern width={60} height={60} style={pokemonView().dotsPokemonBackground} />
      <View style={pokemonView().pokemonNameBackgroundContainer}>
        <GradientText
          style={pokemonView().pokemonNameBackground}
        >
          {pokemon.name.toUpperCase()}
        </GradientText>
      </View>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 0]
                })
              }
            ]
          }
        ]}
      >
        <View style={pokemonView().pokemonView}>
          <CirclePokemon width={150} height={150} style={pokemonView().circlePokemonBackground} />
          <Image source={{ uri: pokemon.images.artwork }} style={pokemonView().pokemonImage} />
          <PokemonInfo pokemon={pokemon} navigation={navigation}></PokemonInfo>
        </View>
      </Animated.View>
      <View style={pokemonView().menuContainer}>
        <TouchableOpacity
          onPress={() => setSelectMenu(1)}
          hitSlop={{ top: 15, bottom: 15, left: 30, right: 30 }}
        >
          {selectMenu == 1 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon} /> : null}
          <Text style={pokemonView(selectMenu == 1).menuTitle}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectMenu(2)}
          hitSlop={{ top: 15, bottom: 15, left: 30, right: 30 }}
        >
          {selectMenu == 2 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon} /> : null}
          <Text style={pokemonView(selectMenu == 2).menuTitle}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectMenu(3)}
          hitSlop={{ top: 15, bottom: 15, left: 30, right: 30 }}
        >
          {selectMenu == 3 ? <Pokeball width={90} height={90} style={pokemonView().pokeballIcon} /> : null}
          <Text style={pokemonView(selectMenu == 3).menuTitle}>Evolution</Text>
        </TouchableOpacity>
      </View>
      <View style={pokemonView().viewCard}>
        {selectMenu == 1 ? <About pokemon={pokemon} /> : null}
        {selectMenu == 2 ? <BasicStats navigation={navigation} pokemon={pokemon} /> : null}
        {selectMenu == 3 ? <Evolutions navigation={navigation} pokemon={pokemon} /> : null}
      </View>
    </View>
  );
}

export default PokemonViewer;