import React from "react";
import { View, TextInput } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const SearchBar = () => {
    return (
      <View style={globalStyles().searchBar}>
        <TextInput
          style={globalStyles().searchBarInput}
          placeholder="Search pokemon"
        />
      </View>
    );
}

export default SearchBar;