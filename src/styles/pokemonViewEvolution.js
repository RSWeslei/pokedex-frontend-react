import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardColors from './cardBackgroundColor'

export const evolutionStyles = (props, value, maxValue) => StyleSheet.create({
    evolutionsCard: {
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    evolutionToContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    evolutionTo: {
        alignItems: 'center',
    },
    pokemonImage: {
        width: 100,
        height: 100,
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    pokeball: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: '-15%',
    },
    arrow: {
        marginHorizontal: 30,
    }
})