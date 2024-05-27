import React from 'react';
import { TouchableOpacityView } from './TouchableOpacityView';
import { Alert, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { toolbarHeight, universalPaddingHorizontal } from '../theme/dimens';
import {
  AppText,
  BOLD,
  EIGHTEEN,
  MEDIUM,
  SECOND,
  SIXTEEN,
  TWELVE,
  WHITE,
} from './AppText';
import FastImage from 'react-native-fast-image';
// import { left_arrow, logoutIcon, notificationIcon } from '../helper/ImageAssets';
import NavigationService from '../navigation/NavigationService';
import { Back, Menu } from '../helper/ImageAssets';
// import { NOFITICATION_SCREEN } from '../navigation/routes';

interface ToolbarProps {
  title?: string;
  isBack?: boolean;
  isDrawer?: boolean;
  isThird?: boolean;
  btnIcon?: boolean;
  handleBtnOnPress: any;
  showAddClient?: any;
  status?: string;
}

const Toolbar = ({
  title,
  isBack,
  isDrawer,
}: ToolbarProps): JSX.Element => {

  return (
    <View style={styles.container}>
      <TouchableOpacityView
        style={styles.containerSecond}
        onPress={() => (isBack ? NavigationService.goBack() : null)}>
        {isBack && (
          <FastImage
            source={Menu}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        )}
        <AppText type={EIGHTEEN} weight={BOLD} color={WHITE}>
          {title}
        </AppText>
      </TouchableOpacityView>
      {isDrawer && (
        <View style={[styles.containerSecond, { gap: 20, justifyContent: 'flex-end' }]}>
          <TouchableOpacityView
            onPress={() => {
              NavigationService.navigate();
            }}
          >
            <FastImage
              source={Back}
              style={[styles.logoutIcon]}
              resizeMode="contain"
            //   tintColor={colors.iconColors}
            />
            <View style={styles.notificationCount}>
              <AppText type={TWELVE} weight={MEDIUM} color={WHITE}>
                {'1'}
              </AppText>
            </View>
          </TouchableOpacityView>
        </View>
      )}
    </View>
  );
};

export { Toolbar };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.headerColor,
    height: toolbarHeight,
    alignItems: 'flex-end',
  },
  leftIcon: {
    height: 15,
    width: 15,
    marginEnd: 15,
  },
  addClientIcon: {
    height: 22,
    width: 24,
    marginBottom: 10,
    marginRight: 10
  },
  containerSecond: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: universalPaddingHorizontal,
  },
  logoutIcon: {
    height: 20,
    width: 20,
  },
  notificationCount: {
    alignItems: 'center',
    // backgroundColor: colors.buttonBg,
    position: 'absolute',
    borderRadius: 20,
    height: 16,
    width: 16,
    bottom: 15,
    left: 10,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 18,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
  },
  addClientButton: {
    borderRadius: 6,
    marginBottom: 9,
  },
});
