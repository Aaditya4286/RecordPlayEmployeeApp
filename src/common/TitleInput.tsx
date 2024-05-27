import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {InputProps} from './Input';
import {colors} from '../theme/colors';
import {borderWidth, inputHeight} from '../theme/dimens';
import {fontFamily} from '../theme/typography';
import {AppText, ERROR, FOURTEEN, MEDIUM} from './AppText';
import {TouchableOpacityView} from './TouchableOpacityView';
import FastImage from 'react-native-fast-image';
import {eye_close_icon, eye_open_icon} from '../helper/ImageAssets';

const TitleInput = ({
  isSecure,
  placeholder,
  onPressVisible,
  secureTextEntry,
  onChangeText,
  value,
  inputStyle,
  title,
  isRequired,
  isSecond,
  secondValue,
  containerStyle,
  secondContainer,
  icon,
  date,
  editable,
  assignRef,
  handleBlur,
  ...props
}: InputProps) => {
  const handleFocus = () => {
    if (date) {
      onPressVisible();
    }
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText type={FOURTEEN} weight={MEDIUM}>
        {title}
        {isRequired && (
          <AppText type={FOURTEEN} weight={MEDIUM} color={ERROR}>
            *
          </AppText>
        )}
      </AppText>
      <View style={[styles.containerSecond(editable), secondContainer]}>
        <TextInput
          {...props}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={colors.primaryText}
          autoCorrect={false}
          style={[styles.inputF, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onPressIn={handleFocus}
          onBlur={handleBlur}
          ref={component => {
            assignRef && assignRef(component);
          }}
          editable={editable}
        />
        {isSecond && <AppText>{secondValue}</AppText>}
        {isSecure && (
          <TouchableOpacityView
            style={styles.eyeIconContainer}
            onPress={onPressVisible}>
            <FastImage
              source={secureTextEntry ? eye_close_icon : eye_open_icon}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </TouchableOpacityView>
        )}
        {icon && date && (
          <TouchableOpacityView
            style={styles.eyeIconContainer}
            onPress={onPressVisible}>
            <FastImage
              source={icon}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </TouchableOpacityView>
        )}
      </View>
    </View>
  );
};

export {TitleInput};
const styles = StyleSheet.create({
  inputF: {
    height: inputHeight,
    fontFamily: fontFamily,
    fontSize: 11,
    color: colors.primaryText,
    flex: 1,
  },
  container: {
    marginTop: 15,
  },
  containerSecond: editable => ({
    height: inputHeight,
    paddingHorizontal: 10,
    borderColor: colors.borderColor,
    borderWidth: borderWidth,
    borderRadius: 5,
    // backgroundColor: colors.white,
    marginTop: 10,
    backgroundColor: editable == false ? colors.disableInput : colors.white,

    flexDirection: 'row',
    alignItems: 'center',
  }),
  eyeIcon: {
    height: 18,
    width: 20,
  },
  eyeIconContainer: {
    justifyContent: 'center',
  },
});
