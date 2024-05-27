import React from 'react';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {commonStyles} from '../theme/commonStyles';
import {ViewProps} from 'react-native';

interface KeyBoardAwareProps {
  children: JSX.Element;
  style?: ViewProps;
}

const KeyBoardAware = ({
  children,
  style,
  noPadding,
  ...props
}: KeyBoardAwareProps): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      {...props}
      keyboardShouldPersistTaps="handled"
      style={[ noPadding ?commonStyles.whiteBackgroundWithoutPadding: commonStyles.whiteBackgroundWithPadding, style]}
      contentContainerStyle={commonStyles.flexGrow}
      showsVerticalScrollIndicator={false}>
      {children}
    </KeyboardAwareScrollView>
  );
};
export {KeyBoardAware};
