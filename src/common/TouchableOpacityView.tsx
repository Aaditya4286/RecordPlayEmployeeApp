import React, {ReactNode} from 'react';
import {
  TouchableOpacity as TouchableOpacityBase,
  Platform,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity as TouchableOpacityGesture} from 'react-native-gesture-handler';
import {colors} from '../theme/colors';

interface TouchableOpacityViewProps extends TouchableOpacityProps {
  children?: ReactNode;
  isGesture?: boolean;
  isLoader?: boolean;
  loaderColor?: string;
}

const TouchableOpacityView = ({
  children,
  isGesture,
  loaderColor,
  isLoader,
  ...props
}: TouchableOpacityViewProps) => {
  const isIos = Platform.OS === 'ios';
  if (isGesture && !isIos) {
    return (
      <TouchableOpacityGesture activeOpacity={0.8} {...props}>
        {isLoader ? (
          <ActivityIndicator
            size={'small'}
            color={loaderColor ? loaderColor : colors.white}
          />
        ) : (
          children
        )}
      </TouchableOpacityGesture>
    );
  } else {
    return (
      <TouchableOpacityBase activeOpacity={0.8} {...props}>
        {isLoader ? (
          <ActivityIndicator
            size={'small'}
            color={loaderColor ? loaderColor : colors.white}
          />
        ) : (
          children
        )}
      </TouchableOpacityBase>
    );
  }
};

export {TouchableOpacityView};
