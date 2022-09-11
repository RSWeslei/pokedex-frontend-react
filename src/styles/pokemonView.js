import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardColors from './cardBackgroundColor'

export const pokemonView = (props) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: cardColors[props],
    },
    pokemonNameBackgroundContainer: {
        marginTop: '10%', 
        position: 'absolute',
    },
    pokemonNameBackground:{
        alignSelf: 'center',
        fontSize: 70,
        color: 'white',
        fontFamily: 'Gobold_Hollow',
    },
    viewCard: {
        backgroundColor: '#ffff',
        height: '58%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
    circlePokemonBackground: {
        position: 'absolute',
        alignSelf: 'flex-start',
    },
    dotsPokemonBackground: {
        position: 'absolute',
        marginLeft: '80%',
        marginTop: '55%',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: '12%',
    },
    menuTitle: {
        color: 'white',
        fontSize: props ? 16 : 15,
        fontWeight: props ? 'bold' : 'normal',
    },
    titles: {
        fontSize: 20,
        fontWeight: 'normal',
        color: cardColors[props],
    },
    pokemonView: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '20%',
        alignSelf: 'flex-start',
        marginLeft: '5%',
    },
    pokemonImage: {
        width: 150,
        height: 150,  
    },
    aboutCard: {
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    pokeballIcon: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: -12,
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
    },
    pokemonDataTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        flexDirection: 'row',
        width: '30%',
    },
    pokemonDataText: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'normal',
        alignSelf: 'flex-start',
    },
    pokemonDataTitleParent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})