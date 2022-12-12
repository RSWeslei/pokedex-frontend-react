import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import api, { getGlobalToken } from '../../plugins/axios'

const backgroundStyle = {
    backgroundColor: '#FFF',
};

async function Favorites({ navigation }) {
    const [favorites, setFavorites] = useState([]);
    const token = await getGlobalToken();
    console.log('token no fav', token);

    await fetch('/favorites-by-user', {
        headers: {
            'Authorization': `${token}`,
        }
    }).then((response) => {
        console.log('resposta', response.data);
        // return response.data;
        // setFavorites(response.data);
    }).catch((error) => {
        console.log(error);
    });

    // console.log(favoritesByUser);

    return (
        <SafeAreaView style={backgroundStyle}>
            
        </SafeAreaView>
    )
}

export default Favorites;