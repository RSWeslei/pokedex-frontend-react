import React from 'react';
import { Image, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { styles } from '../../styles/styles';

const Title = () => {
    return (
      <View style={styles().title}>
        {/*<Text style={styles().titleText}>PokedexApp</Text>*/}
        <Image source={require('../../assets/logo.png')} style={styles().titleLogo} />
        <View style={styles().titleIcons}>
          <Icon
            name="apps-outline"
            type='ionicon'
          >
            <Button></Button>
          </Icon>
          <Icon
            name="swap-vertical-outline"
            type='ionicon'
          >
            <Button></Button>
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