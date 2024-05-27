import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordingScreen from './screens/RecordingScreen';
import EmployeeScreen from './screens/EmployeeScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recording" component={RecordingScreen} />
        <Tab.Screen name="Employee" component={EmployeeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
