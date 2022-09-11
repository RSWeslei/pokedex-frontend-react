import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({colors, ...rest}) => {
  return (
    <MaskedView maskElement={<Text {...rest} />}>
      <LinearGradient
        colors={["rgba(255,255,255,1)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text {...rest} style={[rest.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;