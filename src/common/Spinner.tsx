import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { colors } from '../theme/colors';

interface SpinnerProps {
  style?: boolean;
}
const Spinner = ({style}: SpinnerProps) => {
  return (
    <View style={[styles.spinnerStyle, style]}>
      <ActivityIndicator size={'large'} color={colors.statusColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#0008',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1111,
  },
});

export default Spinner;
