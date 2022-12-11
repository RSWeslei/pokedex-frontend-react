import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const globalStyles = (props) => StyleSheet.create({
  title: {
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleIcons: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    width: 100,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  titleLogo: {
    width: 150,
    height: 80,
  },
  searchBarInput: {
    flex: 1,
    backgroundColor: '#e0dede',
    borderRadius: 5,
    padding: 10,
  },
  searchBar: {
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
  },
  pokemonImage: {
    width: 150,
    height: 150,
    marginTop: -35,
  },
});
