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

const About = () => {
  return (
    <View style={pokemonView().aboutCard}>
      <Text style={pokemonView().titles}>Sobre</Text>
      <Text lineBreakMode='true' style={pokemonView().description}>
        Bulbasaur pode ser visto cochilando sob a luz do sol. 
        Ha uma semente em suas costas.
        Ao absorver os raios do sol, a semente cresce progressivamente.
      </Text>
      <Text style={pokemonView().titles}>Pokédex Dados</Text>
      <View style={pokemonView().pokemonData}>
        <Text>Especie</Text>
      </View>
    </View>
  )
}

function PokemonViewer ({route, navigation}) {
  return (
    <View
      style={{flex: 1,backgroundColor: '#e2e422'}}
    >
      <View style={pokemonView().viewCard}>
        <About/>
        {console.log(route.params.pokemon.weight)}
      </View>
    </View>
  );
}

import { pokemonView } from '../styles/pokemonView';
export default PokemonViewer;