import React from 'react';
import { Image, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { globalStyles } from '../../styles/globalStyles';

const Title = () => {
    return (
      <View style={globalStyles().title}>
        {/*<Text style={styles().titleText}>PokedexApp</Text>*/}
        <Image source={require('../../assets/logo.png')} style={globalStyles().titleLogo} />
        <View style={globalStyles().titleIcons}>
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