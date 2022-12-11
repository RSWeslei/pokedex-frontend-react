import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const defensesStyle = (props) => StyleSheet.create({
    infoMenu: {
        width: 100,
        height: 100,
        position: 'absolute',
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        zIndex: 1,
    },
    infoMenuText: {
        color: Colors.white,
        fontSize: 20,
        textAlign: 'center',
    },
})