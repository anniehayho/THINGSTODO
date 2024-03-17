/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import DailyScreen from './src/screens/HomeScreen/DAILYScreen';
import DrawerNavigation from './src/navigation/menu';
import RootScreen from './src/screens/RootScreen';


import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.root}>
        {/* <DailyScreen navigation={undefined}/> */}
        {/* <DrawerNavigation></DrawerNavigation> */}
        {/* <LoginScreen/> */}
        <RootScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }

});

export default App;
