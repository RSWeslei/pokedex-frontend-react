
import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';

import typesSvgs from "../../assets/type-icons/typesSvgs";
import { pokemonCardStyles } from '../../pages/PokemonViewer/styles';

export default TypeButtom = ({ type }) => {
  return (
    <TouchableOpacity
      key={type.id}
      title={type.name}
      style={pokemonCardStyles(type.color).pokemonCardTypeButton}
      titleStyle={{ color: 'white' }}
      onPress = {() => console.log('TypeButtom pressed')}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {typesSvgs(type.id, pokemonCardStyles().pokemonCardTypeIcon, width = 20, height = 20)}
        <Text style={pokemonCardStyles().pokemonCardTypeText}>{type.name}</Text>
      </View>
    </TouchableOpacity>
  );
}