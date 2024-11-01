import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Animated, TouchableOpacity, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1, // Final value for opacity: 1
            duration: 2000, // Duration for the animation
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, [fadeAnim]);

    const handleLogin = async () => {
        try {


            const Resp = await axios.post('https://by-1.onrender.com/login', { email, password });

            if (Resp.status == 400) {
                alert("Invalid Email or Password")

            } else {
                await AsyncStorage.setItem('token', Resp.data.token);

                navigation.navigate('Drawer');
            }
        } catch (error) {
            alert(error)
            Alert.alert('Login Failed', error.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none" // Prevent capitalization of email
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.linkText}>Go to Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Background color
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4a90e2', // Theme color
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: 300,
        padding: 15,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f9f9f9', // Light background for inputs
    },
    button: {
        backgroundColor: '#4a90e2', // Theme color for button
        borderRadius: 5,
        paddingVertical: 15,
        marginVertical: 10,
        width: '100%', // Full width button
        alignItems: 'center',
    },
    buttonText: {
        color: 'white', // White text for button
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 10,
    },
    linkText: {
        color: '#4a90e2', // Theme color for link
        textDecorationLine: 'underline', // Underline for link
        fontSize: 16,
    },
});


export default LoginScreen;
