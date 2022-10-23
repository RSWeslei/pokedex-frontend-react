import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardColors from '../../styles/cardColors';

export const pokemonView = (props) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: cardColors[props],
    },
    pokemonNameBackgroundContainer: {
        marginTop: '6%', 
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    pokemonNameBackground:{
        alignSelf: 'center',
        fontSize: 70,
        color: 'white',
        justifyContent: 'center',
        fontFamily: 'Gobold_Hollow',
    },
    viewCard: {
        backgroundColor: '#ffff',
        height: '63%',
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
        marginLeft: '10%',
        marginTop: '8%',
    },
    menuTitle: {
        color: 'white',
        fontSize: props ? 16 : 15,
        fontWeight: props ? 'bold' : 'normal',
    },
    titles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: cardColors[props],
        marginTop: 10,
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
        marginTop: 15,
        marginBottom: 10,
        textAlignVertical: 'center',
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
        width: '30%',
        flexDirection: 'row',
        marginRight: -60,
    },
    pokemonDataText: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'normal',
        alignSelf: 'flex-start',
    },
    pokemonDataTitleParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    }
});

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
});

export const evolutionStyles = (props, value, maxValue) => StyleSheet.create({
    evolutionsCard: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: cardColors[props],
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    evolutionToContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    evolutionTo: {
        alignItems: 'center'
    },
    pokemonImage: {
        width: 100,
        height: 100
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    pokeball: {
        position: 'absolute'
    },
    arrow: {
        marginHorizontal: 45
    },
    level: {
        fontSize: 15,
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    noEvolution: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export const statusStyles = (props, value, maxValue) => StyleSheet.create({
    statusCard: {
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        marginLeft: 30,
        marginTop: 40,
    },
    basicStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    statusTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: cardColors[props],
    },
    statusSubtitle: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'grey',
        marginVertical: 10,
    },
    basicStatusBar: {
        height: 7,
        width: '45%',
        marginLeft: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 10,
    },
    basicStatusBarFill: {
        backgroundColor: cardColors[props],
        width: `${(value / maxValue) * 100}%`,	
        borderRadius: 10,
    },
    basicStatusTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginEnd: 10,
        width: '25%',
    },
    basicStatusText: {
        fontSize: 17,
        width: '10%',
        alignSelf: 'flex-start',
        textAlign: 'left',
    },
    maxStatValue: {
        marginRight: '5%',
    },
    defensesTypesContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    defensesTypes: {
        width: 30,
        height: 30,
        backgroundColor: props,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    typeDefenseText: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 5,
    }
});