import React from "react";
import { Card } from 'react-native-elements';
import { Image, TouchableOpacity, View } from 'react-native';

import PokemonInfo from '../PokemonInfo';

import PokeballCard from '../../assets/svg-icons/pokeball.svg'
import DotsCard from '../../assets/svg-icons/pattern.svg'

import { styles } from '../../styles/styles';
import { pokemonCardStyles } from '../../styles/pokemonCardStyles';

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
          pokemonId: props.pokemon.id
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

export default PokemonCard;