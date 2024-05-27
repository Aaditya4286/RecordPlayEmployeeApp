import React, {useEffect} from 'react';
import {AppSafeAreaView} from '../common/AppSafeAreaView';
import NavigationService from '../navigation/NavigationService';
import {NAVIGATION_AUTH_STACK} from '../navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_TOKEN_KEY} from '../helper/Constants';
import Spinner from '../common/Spinner';

const AuthLoading = () => {


  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const customerToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
      customerToken
        NavigationService.reset(NAVIGATION_AUTH_STACK);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppSafeAreaView>
      <Spinner style={true} />
    </AppSafeAreaView>
  );
};

export default AuthLoading;
