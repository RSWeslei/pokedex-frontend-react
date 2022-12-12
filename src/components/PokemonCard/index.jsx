import React from "react";
import { Card } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image'

import PokemonInfo from '../PokemonInfo';

import PokeballCard from '../../assets/svg-icons/pokeball.svg'
import DotsCard from '../../assets/svg-icons/pattern.svg'

import { globalStyles } from '../../styles/globalStyles';
import { pokemonCardStyles } from '../../pages/PokemonViewer/styles';


// use pure component to prevent re-rendering
export default class PokemonCard extends React.PureComponent {
  render() {
    function getCardColor (props) {
      return props.pokemon.types.length == 2
        ? props.pokemon.types[1].name
        : props.pokemon.types[0].name
    }

    return (
      <Card containerStyle={pokemonCardStyles(getCardColor(this.props)).pokemonCard}>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.pokemonId = this.props.pokemon.id
            this.props.navigation.navigate('PokemonViewer', {
              pokemonId: this.props.pokemon.id
            })
          }}
          style={pokemonCardStyles().pokemonCardTouchable}
        >
          <DotsCard width={110} height={40} style={pokemonCardStyles().dotsBackground} />
          <PokeballCard width={150} height={150} style={pokemonCardStyles().pokeballBackground} PokeballCard />
          <View style={{ flexDirection: 'row' }}>
            <PokemonInfo pokemon={this.props.pokemon} navigation={this.props.navigation}/>
            <View style={{ marginLeft: 'auto' }}>
              <FastImage 
                source={{ 
                  uri: this.props.pokemon.images.artwork,
                  priority: FastImage.priority.normal 
                }} 
                style={globalStyles().pokemonImage} 
              />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }

}