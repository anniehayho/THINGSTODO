// export { default } from './CustomerInput';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import styles from './styles'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, leftIcon, rightIcon}) =>
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
                <Image source={rightIcon} style={styles.icon} />
            </View>
        </View>
    )
};

export default CustomInput