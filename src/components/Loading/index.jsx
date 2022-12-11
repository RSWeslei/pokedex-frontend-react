import { React } from 'react'
import { View, ActivityIndicator, Image } from 'react-native';

import LoadingStyles from './styles';

const Loading = () => {
  return (
    <View style={LoadingStyles.mainContainer}>
      <Image source={require('../../assets/logo.png')} style={LoadingStyles.logo}/>
      <View style={{flexDirection: 'row'}}>
        <ActivityIndicator size="large" color="red"/>
      </View>
    </View>
  )
}

export default Loading;