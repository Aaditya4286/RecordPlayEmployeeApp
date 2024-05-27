import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {loaderAnimation} from '../helper/ImageAssets';

const Loader = () => {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        style={styles.animation}
        source={loaderAnimation}
        autoPlay
        loop
      />
    </View>
  );
};

export {Loader};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: 200,
    width: 200,
  },
});
