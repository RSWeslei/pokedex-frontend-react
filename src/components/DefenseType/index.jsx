import { React, useState, useEffect, useRef } from 'react'
import { Text, TouchableOpacity, View, Animated } from 'react-native';

import typesSvgs from "../../assets/type-icons/typesSvgs";

import { statusStyles } from "../../pages/PokemonViewer/styles";
import { defensesStyle } from "./styles";
import typeColors from "../..//styles/typeColors"

const DefenseType = ({ defenseType, pokemon}) => {
  return (
    <View>
      <TouchableOpacity >
        <View style={statusStyles(typeColors(defenseType)).defensesTypes}>
          {typesSvgs(defenseType, width = 30, height = 30)}
        </View>
      </TouchableOpacity>
      <Text style={statusStyles().typeDefenseText}>
        {getDefense(pokemon, defenseType)}
      </Text>
    </View>
  )
}

const InfoMenu = ({ defenseType, pokemon, position }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...defensesStyle(position).infoMenu,
        opacity: fadeAnim,
      }}
    >
      <Text style={defensesStyle().infoMenuText}>
        {getDefense(pokemon, defenseType)}
      </Text>
    </Animated.View>
  )
}

const getDefense = (props, type) => {
  let effectiveness = props.damageRelation.find((typeDefense) => typeDefense.idType == type)?.value
  if (effectiveness == 0.25) {
    return '1/4'
  }
  else if (effectiveness == 0.5) {
    return '1/2'
  }
  else {
    return effectiveness
  }
}

// export both components
export default DefenseType;
export { InfoMenu };