import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
  //   @ts-ignore
} from 'react-native-indicators';

const Spiner = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'rgba(46, 39, 87, 0.7)',
        zIndex: 99999999,
      }}
    >
      <PacmanIndicator color='#fff' />
    </View>
  );
};

export default Spiner;
