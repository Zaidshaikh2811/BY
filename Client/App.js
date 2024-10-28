import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name="Login" component={LoginScreen} options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name="Signup" component={SignupScreen} options={
          {
            headerShown: false
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
