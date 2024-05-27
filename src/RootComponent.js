import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {AppText, SEMI_BOLD, THIRTEEN, WHITE} from './common';

const NoInternetModal = ({visible}) => {
  return visible ? (
    <View style={styles.noInternet}>
      <AppText type={THIRTEEN} color={WHITE} weight={SEMI_BOLD}>
        No Internet Connection
      </AppText>
    </View>
  ) : (
    <></>
  );
};

const RootComponent = ({children}) => {
  const [netConnected, setNetConnected] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetConnected(state.isConnected);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!netConnected) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [netConnected]);

  return (
    <View style={{flex: 1}}>
      <NoInternetModal visible={visible} setVisible={setVisible} />
      {children}
    </View>
  );
};

export default RootComponent;
const styles = StyleSheet.create({
  noInternet: {
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.OS === 'android' ? 0 : 30,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  updateBg: {
    height: '100%',
    width: '100%',
  },
});
