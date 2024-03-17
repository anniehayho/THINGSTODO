import { View, Text, NativeAppEventEmitter } from 'react-native'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NewTaskScreen from '../../screens/NewTaskScreen'
import ImportantTaskScreen from '../../screens/ImportantTaskScreen'
import DoneTaskScreen from '../../screens/DoneTaskScreen'
import LaterTaskScreen from '../../screens/LaterTaskScreen'
import CategoriesScreen from '../../screens/CategoriesScreen'
import SettingScreen from '../../screens/SettingScreen'
import HomeScreen from '../HomeScreen/DAILYScreen'
import LoginScreen from '../../screens/LoginScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login' screenOptions={false}>
        <Drawer.Screen name="Login" component={LoginScreenScreen} />
        <Drawer.Screen name="NewTask" component={NewTaskScreen} />
        <Drawer.Screen name="ImportantTask" component={ImportantTaskScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

export default DrawerNavigation