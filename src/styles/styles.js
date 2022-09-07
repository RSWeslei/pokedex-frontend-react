import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = (props) => StyleSheet.create({
    title: {
      marginTop: 25,
      marginBottom: 20,
      flexDirection:'row',
      alignSelf:'center',
      alignItems:'center',
    },
    titleIcons: {
      flexDirection:'row',
      marginLeft: 20,
      justifyContent:'space-between',
      width: 100,
    },
    titleText: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      color: Colors.black,
      fontWeight: 'bold'
    },
    titleLogo: {
      width: 40,
      height: 40,
    },
    searchBarInput: {
      flex: 1,
      backgroundColor: '#e0dede',
      borderRadius: 5,
      padding: 10,
    },
    searchBar: {
      flex: 1,
      marginLeft: 30,
      marginRight: 30,
      paddingTop: 30,
    },
    searchIcon: {
      padding: 10,
    },
    pokemonCardName: {
      textAlign: 'left',
      color: Colors.white,
      fontSize: 20,
    },
    pokemonCardId: {
      fontSize: 17,
      fontWeight: 'bold'
    },
    pokemonImage: {
      width: 200,
      height: 200,
      marginTop: -60,
    },
    pokemonCardTypeButton: {
      backgroundColor: props,
      borderRadius: 5,
      marginRight: 5,
      marginBottom: 5,
    },
    pokemonCard: {
      backgroundColor: '#8bbe8a',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      marginBottom: 40,
    },
  });
  