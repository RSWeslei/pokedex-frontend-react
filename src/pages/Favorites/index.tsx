import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { getGlobalToken } from '../../plugins/axios';

const backgroundStyle = {
    backgroundColor: '#FFF',
};

async function Favorites({ navigation }) {
    const token = await getGlobalToken();
    console.log('favoritos token: ', token);

    return (
        <SafeAreaView style={backgroundStyle}>
            
        </SafeAreaView>
    )
}

export default Favorites;