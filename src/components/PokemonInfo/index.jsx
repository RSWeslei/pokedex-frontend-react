import React from "react";
import { Card } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native';
import { pokemonCardStyles } from '../../pages/PokemonViewer/styles';

import typesSvgs from '../../assets/type-icons/typesSvgs.js';


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

export default PokemonInfo;