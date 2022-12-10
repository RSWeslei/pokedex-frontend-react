import React from "react";
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';
import { pokemonCardStyles } from '../../pages/PokemonViewer/styles';

import TypeButtom from "../TypeButtom";

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
          <TypeButtom type={type} />
        ))}
      </View>
    </View>
  );
}

export default PokemonInfo;