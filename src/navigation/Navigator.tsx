import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import NavigationService from './NavigationService';
import * as routes from './routes';
import * as React from 'react';
import AuthLoading from '../screens/AuthLoading';
// import RecordingScreen from '../screens/RecordingScreen';
// import EmployeeScreen from '../screens/EmployeeScreen';
// import RecordScreen from '../screens/MyRecordScreen';
import MyRecordScreen from '../screens/MyRecordScreen';
import StartRecordingScreen from '../screens/StartRecordingScreen';
import SaveRecording from '../screens/SaveRecording';


const Stack = createStackNavigator();

const MyAuthLoadingStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.NAVIGATION_AUTH_LOADING_SCREEN}
      component={AuthLoading}
    />
    <Stack.Screen name={routes.NAVIGATION_AUTH_STACK} component={AuthStack} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
{/* <Stack.Screen name={routes.RECORDING_SCREEN} component={RecordingScreen} /> */}
 {/* <Stack.Screen name={routes.EMPLOYEE_SCREEN} component={EmployeeScreen} /> */}
<Stack.Screen name={routes.MY_RECORD_SCREEN} component={MyRecordScreen} /> 
<Stack.Screen name={routes.SAVE_RECORDING} component={SaveRecording} /> 
<Stack.Screen name={routes.START_RECORDING_SCREEN} component={StartRecordingScreen} /> 
  </Stack.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <MyAuthLoadingStack />
    </NavigationContainer>
  );
};

export default Navigator;
