import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {AppText, TouchableOpacityView} from '.';
import {buttonHeight} from '../theme/dimens';
import {BOLD, FOURTEEN, SECOND} from './AppText';
import {colors} from '../theme/colors';

const Button = ({
  children,
  activeOpacity,
  containerStyle,
  titleStyle,
  disabled,
  onPress,
  isSecond,
  loading,
  isThird,
  ...rest
}) => {
  return (
    <TouchableOpacityView
      style={[
        styles.buttonStyle(colors),
        containerStyle,
        disabled || loading ? {backgroundColor: colors.buttonBgDisabled} : {},
      ]}
      activeOpacity={1}
      onPress={
        disabled || loading ? console.log('AMIT SINGH SHEKHAWAT') : onPress
      }
      {...rest}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.buttonBg} />
      ) : (
        <AppText
          type={FOURTEEN}
          weight={BOLD}
          color={SECOND}
          style={titleStyle}>
          {children}
        </AppText>
      )}
    </TouchableOpacityView>
  );
};
const styles = StyleSheet.create({
  buttonStyle: colors => ({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: buttonHeight,
    borderRadius: 5,
    backgroundColor: colors.buttonBg,
  }),
});

export {Button};
