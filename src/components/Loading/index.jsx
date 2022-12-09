import { React, useState, useEffect } from 'react'
import { Text, View } from 'react-native';

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Loading...</Text>
    </View>
  )
}

export default Loading;