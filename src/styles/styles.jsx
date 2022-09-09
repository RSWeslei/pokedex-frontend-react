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
      marginBottom: 30
    },
    searchIcon: {
      padding: 10,
    }
});
  