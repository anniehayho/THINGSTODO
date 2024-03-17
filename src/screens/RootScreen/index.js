import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import LoginScreen from '../LoginScreen';
import HomeScreen from '../HomeScreen/DAILYScreen';
import NewTaskScreen from '../NewTaskScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RootScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTask" component={NewTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;
