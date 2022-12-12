import { React, useState, useEffect, useRef } from 'react'
import { Card, Icon } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import Text from '../../utils/TextSF';

import { pokemonCardStyles } from '../../pages/PokemonViewer/styles';
import apiFetch from "../../plugins/fetch";
import storage from '../../plugins/storage';

import TypeButtom from "../TypeButtom";

const PokemonInfo = (props, navigation) => {
  let [isFavorite, setIsFavorite] = useState(props.pokemon.isFavorite);
  const addFavorite = async () => {
    let options = {
      method: 'POST',
      body: JSON.stringify({
        idPokemon: props.pokemon.id
      })
    }
    let url = props.pokemon.isFavorite ? `/favorites/remove` : '/favorites/create';
    const response = await apiFetch(url, options);

    let token = await storage.getGlobalToken();
    if (!token) {
      props.navigation.navigate('Login')
    }
    if (props.pokemon.isFavorite) {
      props.pokemon.isFavorite = false;
      setIsFavorite(false);
      return;
    }
    props.pokemon.isFavorite = true;
    setIsFavorite(true);
  }

  return (
    <View style={{ marginStart: 10 }}>
      <Text style={pokemonCardStyles().pokemonCardId}>{props.pokemon.id.toString().length == 1 ? '#00'
        : props.pokemon.id.toString().length == 2
          ? '#0' : '#'}{props.pokemon.id}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Card.Title style={pokemonCardStyles().pokemonCardName}>{props.pokemon.name}</Card.Title>
        <TouchableOpacity onPress={() => addFavorite()}>
          <Icon
            name={isFavorite ? "star" : "star-outline"}
            type='ionicon'
            color="white"
            style={pokemonCardStyles().pokemonFavoriteIcon}
          ></Icon>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignContent: 'space-between' }}>
        {props.pokemon.types.map(type => (
          <TypeButtom type={type} key={type.id} />
        ))}
      </View>
    </View>
  );
}

export default PokemonInfo;