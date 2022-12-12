import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import storage from '../../plugins/storage';

import { globalStyles } from '../../styles/globalStyles';

const Title = ({navigation}) => {
    return (
      <View style={globalStyles().title}>
        <Icon name="menu" size={30} color="#000" onPress={() => navigation.openDrawer()} />
        <Image source={require('../../assets/logo.png')} style={globalStyles().titleLogo} />
        <View style={globalStyles().titleIcons}>
          <Icon
            name="log-out-outline"
            type='ionicon'
            onPress={() => {
              storage.removeGlobalToken()
              navigation.navigate('Login')
            }}
          >
          </Icon>
          <Icon
            name="star"
            type='ionicon'
            onPress={() => navigation.navigate('Favorites')}
          >
          </Icon>
          <Icon
            name="options-outline"
            type='ionicon'
          >
            <Button></Button>
          </Icon>
        </View>
      </View>
    );
}

export default Title;