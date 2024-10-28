// screens/SignupScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const navigation = useNavigation()
    const submitData = async () => {
        try {
            const resp = axios.post("https://by-1.onrender.com/signup", {
                name,
                email,
                password
            })
            if (resp.status === 400) {
                alert("User already exists")
                return
            } else {
                navigation.navigate('Login');
            }


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1, // Final value for opacity: 1
            duration: 2000, // Duration for the animation
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, [fadeAnim]);



    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
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
            <TouchableOpacity style={styles.button} onPress={submitData}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Go to Login</Text>
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

export default SignupScreen;
