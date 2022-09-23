import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardColors from './cardBackgroundColor'

export const pokemonCardStyles = (props) => StyleSheet.create({
    pokemonCardName: {
        textAlign: 'left',
        color: Colors.white,
        fontSize: 30
    },
    pokemonCardId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    pokemonImage: {
        width: 170,
        height: 170,
        marginTop: -40,
    },
    pokemonCardTypeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props,
        alignSelf: 'flex-start',
        borderRadius: 5,
        height: 35,
        marginEnd: 10,
    },
    pokemonCardTypeText: {
        color: Colors.white,
        fontSize: 15,
        marginLeft: 5,
        marginEnd: 5,
        fontWeight: 'bold'
    },
    pokemonCardTypeIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
        marginEnd: 1,
    },
    pokemonCard: {
        backgroundColor: cardColors[props],
        borderRadius: 10,
        padding: 10,
        margin: 10,
        marginBottom: 40,
        height: 150,
    },
    pokeballBackground: {
        position: 'absolute',
        marginVertical: -10,
        marginLeft: 210,
    },
    dotsBackground: {
        position: 'absolute',
        marginStart: 70
    }
})