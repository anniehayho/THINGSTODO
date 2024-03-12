import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const CustomerInput = ({value, setValue, placeholder, secureTextEntry, leftIcon}) =>
{
    return (
        <View>
            <View style={styles.inputContainer}>
                <Image source={leftIcon} style={styles.icon} />
                <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                styles={styles.inputText}
                secureTextEntry={secureTextEntry}>
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
        paddingHorizontal: 10,
        marginVertical: 8,
      },
      inputText: {
        width: '48%',
        padding: 10,
        borderRadius: 5,
      },
      icon: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
});

export default CustomerInput