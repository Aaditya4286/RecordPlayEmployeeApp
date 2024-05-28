import React from 'react';
import {TouchableOpacity as TouchableOpacityBase, Platform} from 'react-native';
import {TouchableOpacity as TouchableOpacityGesture} from 'react-native-gesture-handler';

const TouchableOpacityView = ({children, isGesture, ...props}) => {
  const isIos = Platform.OS === 'ios';
  if (isGesture && !isIos) {
    return (
      <TouchableOpacityGesture {...props}>{children}</TouchableOpacityGesture>
    );
  } else {
    return <TouchableOpacityBase {...props}>{children}</TouchableOpacityBase>;
  }
};

export {TouchableOpacityView};
