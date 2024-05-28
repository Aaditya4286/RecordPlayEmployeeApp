import React from 'react';
import { StyleSheet } from 'react-native';
import { AppSafeAreaView, Toolbar } from '../common';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecordingScreen from './RecordingScreen';
import EmployeeScreen from './EmployeeScreen';
import { colors } from '../theme/colors';

const Tab = createMaterialTopTabNavigator();

const MyRecordScreen = () => {
  return (
    <AppSafeAreaView>
      <Toolbar title="My Recorder" isDrawer />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.headerColor,
          tabBarInactiveTintColor: colors.gray,
          tabBarIndicatorStyle: {
            backgroundColor: colors.indicator,
            width: '30%',
            marginLeft: '10%', 
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600', 
          },
        }}
      >
        <Tab.Screen name="Recording" component={RecordingScreen} />
        <Tab.Screen name="Employee" component={EmployeeScreen} />
      </Tab.Navigator>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default MyRecordScreen;
