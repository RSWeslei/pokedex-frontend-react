import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardColors from './cardBackgroundColor'

export const pokemonView = (props) => StyleSheet.create({
    viewCard: {
        backgroundColor: '#ffff',
        height: '60%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
    titles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    aboutCard: {
        flex: 1,
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 20,
    },
    description: {
        fontSize: 15,
        maxWidth: '90%',
        marginTop: 15,
        marginBottom: 20,
        marginStart: 10,
    },
    pokemonData: {
        flex: 1,
        marginTop: 20,
        marginStart: 10,
    }
})