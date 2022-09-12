import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import cardColors from './cardBackgroundColor'

export const statusStyles = (props, value, maxValue) => StyleSheet.create({
    statusCard: {
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        marginLeft: 30,
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
})