import React from 'react';
import { TouchableOpacityView } from './TouchableOpacityView';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { toolbarHeight, universalPaddingHorizontal } from '../theme/dimens';
import {
  AppText,
  BOLD,
  EIGHTEEN,
  WHITE,
} from './AppText';
import FastImage from 'react-native-fast-image';
import NavigationService from '../navigation/NavigationService';
import { Back, Menu } from '../helper/ImageAssets';

interface ToolbarProps {
  title?: string;
  isBack?: boolean;
  isDrawer?: boolean;
}

const Toolbar = ({
  title,
  isBack,
  isDrawer,
}: ToolbarProps): JSX.Element => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {isBack && (
          <TouchableOpacityView
            style={styles.iconTouchable}
            onPress={() => NavigationService.goBack()}>
            <FastImage
              source={Back}
              style={styles.leftIcon}
              resizeMode="contain"
            />
          </TouchableOpacityView>
        )}
        {isDrawer && (
          <TouchableOpacityView
            style={styles.iconTouchable}
            onPress={() => NavigationService.navigate()}>
            <FastImage
              source={Menu}
              style={styles.leftIcon}
              resizeMode="contain"
            />
          </TouchableOpacityView>
        )}
     
      <AppText type={EIGHTEEN} weight={BOLD} color={WHITE} style={styles.titleText}>
        {title}
      </AppText>
       </View>
    </View>
  );
};

export { Toolbar };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.headerColor,
    height: toolbarHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: universalPaddingHorizontal,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'43%'
  },
  iconTouchable: {
    marginEnd: 15, 
  },
  leftIcon: {
    height: 20,
    width: 20,
  },
  titleText: {
    // flex: 1,
    textAlign: 'center',
  },
});
