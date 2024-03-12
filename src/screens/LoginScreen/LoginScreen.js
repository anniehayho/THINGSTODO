import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../assets/images/logoApp.png'
import CustomerInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import userName from '../../assets/images/userName.png'
import passWord from '../../assets/images/passWord.png'
import facebookLogo from '../../assets/images/facebookLogo.png'
import twitterLogo from '../../assets/images/twitterLogo.png'
import googleLogo from '../../assets/images/googleLogo.png'
import CustomLogin from '../../components/CustomLogin'

const LoginScreen = () =>
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions(); 

    const onLoginPressed = () => 
    {
        console.warn("Log in");
    }

    const onLogin = (socialNetwork) => {
        // Xử lý đăng nhập với social network được chọn
        console.log(`Login with ${socialNetwork}`);
        // Thực hiện các thao tác đăng nhập với social network cụ thể
      };

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.2}]} resizeMode='contain'></Image>
            
            <View style={styles.container}>
                <CustomerInput placeholder={"Username"} value={username} setValue={setUsername} secureTextEntry={false} leftIcon={userName}/>
                <View style={styles.divider} />
                <CustomerInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true} leftIcon={passWord}/>
            </View>

            <CustomButton text="LOGIN" onPress={onLoginPressed}/>

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}> OR </Text>
                <View style={styles.line} />
            </View>
            <Text style={{marginTop:-90, color:'#ccc'}}>login using social media</Text>
            
            <View style={styles.loginSocialMedia}>
                <CustomLogin onPress={() => onLogin('facebook')} imageSource={facebookLogo} />
                <CustomLogin onPress={() => onLogin('twitter')} imageSource={twitterLogo} />
                <CustomLogin onPress={() => onLogin('google')} imageSource={googleLogo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 60,
    },
    logo: {
        width: 140,
        maxWidth: 300,
        maxHeight: 200,
    },
    container: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 30,
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        margin: 10,
    },
    line: {
        height: 1,
        backgroundColor: '#ccc',
        margin: 10,
        width: 100,
    },
    orContainer: {
        marginVertical: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50, 
    },
    orText: {
        color: '#ccc', 
        fontSize: 16,  
    },
    loginSocialMedia: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'row',
    },
});

export default LoginScreen