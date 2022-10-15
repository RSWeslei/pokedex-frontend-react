import { React, useState, useEffect } from 'react'
import { Text, Image, TouchableOpacity, View, Animated, StyleSheet} from 'react-native'

import api from '../plugins/axios.js'
import kgToLbs from '../utils/converter'
import GradientText from '../utils/TextGradient'
import PokemonInfo from '../components/PokemonInfo'

import Arrow from '../assets/svg-icons/arrow.svg'
import typesSvgs from '../assets/type-icons/typesSvgs.js'
import CirclePokemon from '../assets/svg-icons/circle.svg'
import Pokeball from '../assets/svg-icons/pokeballFull.svg'
import DotsPattern from '../assets/svg-icons/dotsPattern.svg'
import PokeballFull from '../assets/svg-icons/pokeballFullColor.svg'

import typesColors from '../styles/typesColors'
import { pokemonView } from '../styles/pokemonView'
import { statusStyles } from '../styles/pokemonViewStatus'
import { evolutionStyles } from '../styles/pokemonViewEvolution'

const About = (props) => {
  return (
    <View style={pokemonView().aboutCard}>
      <Text style={pokemonView(getBackgroundColor(props.pokemon)).titles}>About</Text>
      <Text lineBreakMode='true' style={pokemonView().description}>
        {props.pokemon.description}
      </Text>
      <Text style={pokemonView(getBackgroundColor(props.pokemon)).titles}>Pokedex Data</Text>
      <View style={pokemonView().pokemonData}>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Height:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${Number(props.pokemon.height).toFixed(1)}m`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Weight:</Text>
          <Text style={pokemonView().pokemonDataText}>{`${Number(props.pokemon.weight).toFixed(1) }kg (${kgToLbs(props.pokemon.weight)} lbs)`}</Text>
        </View>
        <View style={pokemonView().pokemonDataTitleParent}>
          <Text style={pokemonView().pokemonDataTitle}>Abilities:</Text>
          <Text style={pokemonView().pokemonDataText}>
            {props.pokemon?.abilities.map((ability, index) => {
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
    <View style={statusStyles().statusCard}>
      <Text style={pokemonView(getBackgroundColor(pokemon)).titles}>Basic Stats</Text>
      <View>
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
      <Text style={pokemonView(getBackgroundColor(pokemon)).titles}>Types of defenses</Text>
      <Text style={statusStyles(getBackgroundColor(pokemon)).statusSubtitle}>{`The effectiveness of each type on the pokemon ${pokemon.name}`}</Text>
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

const Evolutions = (props) => {
  const pokemon = props.pokemon
  return (
    <View style={evolutionStyles().evolutionsCard}>
      <Text style={pokemonView(getBackgroundColor(pokemon)).titles}>Evolutions</Text>
      <View style={evolutionStyles().evolutionToContainer}>
        <EvolutionPokemon pokemon={pokemon}/>
        <Arrow width={30} height={30} style={evolutionStyles().arrow}></Arrow>
        <EvolutionPokemon pokemon={pokemon}/>
      </View>
      <View style={evolutionStyles().evolutionToContainer}>
        <EvolutionPokemon pokemon={pokemon}/>
        <Arrow width={30} height={30} style={evolutionStyles().arrow}></Arrow>
        <EvolutionPokemon pokemon={pokemon}/>
      </View>
    </View>
  )
}

const EvolutionPokemon = (props) => {
  const pokemon = props.pokemon
  return (
    <View style={evolutionStyles().evolutionTo}>
      <PokeballFull width={130} height={130} style={evolutionStyles().pokeball}/>
      <Image source={{ uri: pokemon.images.artwork }} style={evolutionStyles().pokemonImage} />
      <Text style={{fontStyle: 'italic', marginTop: 10, fontSize: 15}}>{pokemon.id.toString().length == 1 ? '#00'
        : pokemon.id.toString().length == 2
          ? '#0' : '#'}{pokemon.id}
      </Text>
      <Text style={evolutionStyles().pokemonName}>{pokemon.name}</Text>
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

const getBackgroundColor = (pokemon) => {
  return pokemon.types.length == 2
    ? pokemon.types[1].name
    : pokemon.types[0].name
}

const getDefense = (props, type) => {
  let effectiveness = props.pokemon.damageRelation.find((typeDefense) => typeDefense.idType == type)?.value
  if (effectiveness == 0.25) {
    return '1/4'
  }
  else if (effectiveness == 0.5) {
    return '1/2'
  }
  else {
    return effectiveness
  }
}

function PokemonViewer({ route, navigation }) {
  let [selectMenu, setSelectMenu] = useState(1);
  const pokemonId = route.params.pokemonId
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    api.get(`/pokemons/${pokemonId}`).then(response => {
      setPokemon(response.data);
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
    <View
      style={pokemonView(getBackgroundColor(pokemon)).mainContainer}
    >
      <TouchableOpacity
        style={pokemonView().backButton}
        onPress={() => navigation.goBack()}
      >
      </TouchableOpacity>
      <View style={pokemonView().pokemonNameBackgroundContainer}>
        <GradientText
          style={pokemonView().pokemonNameBackground}
        >
          {pokemon.name.toUpperCase()}
        </GradientText>
      </View>
      <DotsPattern width={60} height={60} style={pokemonView().dotsPokemonBackground} />
      <View style={pokemonView().pokemonView}>
        <CirclePokemon width={150} height={150} style={pokemonView().circlePokemonBackground} />
        <Image source={{ uri: pokemon.images.artwork }} style={pokemonView().pokemonImage} />
        <PokemonInfo pokemon={pokemon}></PokemonInfo>
      </View>
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
        {selectMenu == 2 ? <BasicStats pokemon={pokemon} /> : null}
        {selectMenu == 3 ? <Evolutions pokemon={pokemon} /> : null}
      </View>
    </View>
  );
}

export default PokemonViewer;