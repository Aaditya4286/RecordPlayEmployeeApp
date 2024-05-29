import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigator from './navigation/Navigator';
import store from './store/store';
import RootComponent from './RootComponent';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootComponent>
          <Navigator />
        </RootComponent>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
