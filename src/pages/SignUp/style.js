import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    LayoutStyle: {
        backgroundColor: '#FFF',
        padding: 30,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    Title: {
        color: 'red',
        fontSize: 25,
        textAlign: 'center',
        marginTop: '50%',
        marginBottom: '10%'
    },
    LinkRetorno: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    InputLogin: {
        height: '8%',
        width: '85%',
        marginTop: 5,
        paddingLeft: 10,
        backgroundColor: '#F2F2F2',
        color: '#747476',
        borderRadius: 10,
        marginBottom: 10,
    },
    BotaoPadrao: {
        width: '85%',
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#F2F2F2',
        backgroundColor: '#ff1a1a',
        height: '7%',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    TextoBotao: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center'
    },
});