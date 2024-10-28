// screens/WelcomeScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

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
                <Image
                    source={{ uri: "https://res.cloudinary.com/dhyczd7jv/image/upload/v1730112531/ixj0brtqqzyhnubux4u2.png" }}
                    style={styles.image}
                />
                <Text style={styles.title}>Welcome to Our App!</Text>
                <Text style={styles.subtitle}>Login or Sign Up to continue</Text>
            </Animated.View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.signupButton]}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
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
    image: {
        width: 300, // Adjust width as needed
        height: 300, // Adjust height as needed
        marginBottom: 20,
        resizeMode: 'contain', // Ensure the image maintains its aspect ratio
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#555', // A gray color for the subtitle
        marginBottom: 40,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%', // Ensure buttons take the full width
        paddingHorizontal: 20,
        marginTop: 10,
    },
    button: {
        backgroundColor: "#4a90e2", // Default button color
        borderRadius: 5,
        paddingVertical: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    loginButton: {
        // Specific styles for login button can go here
    },
    signupButton: {
        backgroundColor: '#fff', // Sign Up button white background
        borderColor: '#4a90e2',
        borderWidth: 2, // Border for the Sign Up button
    },
    buttonText: {
        color: 'black', // Default text color
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
