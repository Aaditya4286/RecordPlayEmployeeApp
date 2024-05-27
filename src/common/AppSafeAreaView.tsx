/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {Platform, StatusBar, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme/colors';

interface AppSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
  isSecond?: boolean;
}

const AppSafeAreaView = ({children, style, isSecond}: AppSafeAreaViewProps) => {
  return Platform.OS === 'ios' ? (
    <>
      <SafeAreaView
        edges={['top']}
        style={{
          flex: 0,
          backgroundColor: !isSecond ? colors.statusColor : colors.primaryBg,
        }}
      />
      <SafeAreaView
        edges={['right', 'left', 'bottom']}
        style={[
          {
            flex: 1,
          },

          style,
        ]}>
        <StatusBar translucent={false} barStyle={'light-content'} />

        {children}
      </SafeAreaView>
    </>
  ) : (
    <View style={[{flex: 1}, style]}>
      <StatusBar
        translucent={false}
        backgroundColor={!isSecond ? colors.statusColor : colors.primaryBg}
        barStyle={'light-content'}
      />
      {children}
    </View>
  );
};

export {AppSafeAreaView};
