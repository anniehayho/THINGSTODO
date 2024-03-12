import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';

const CustomLogin = ({ onPress, imageSource }) => {
  return (
    <View>
      <Pressable onPress={() => onPress()} style={styles.container}>
        <Image source={imageSource} style={styles.logo} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
});

export default CustomLogin;
