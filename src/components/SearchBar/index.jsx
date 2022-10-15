import React from "react";
import { View, TextInput } from 'react-native';

import { styles } from '../../styles/styles';

const SearchBar = () => {
    return (
      <View style={styles().searchBar}>
        <TextInput
          style={styles().searchBarInput}
          placeholder="Search pokemon"
        />
      </View>
    );
}

export default SearchBar;