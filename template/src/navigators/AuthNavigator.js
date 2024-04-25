import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginContainer, NewPasswordContainer, OtpContainer, ResetPasswordContainer, SignupContainer, SplashContainer } from '@/screens';


const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashContainer">
            <Stack.Screen name="SplashContainer" component={SplashContainer} />
            <Stack.Screen name="LoginContainer" component={LoginContainer} />
            <Stack.Screen name="ResetPasswordContainer" component={ResetPasswordContainer} />
            <Stack.Screen name="OtpContainer" component={OtpContainer} />
            <Stack.Screen name="NewPasswordContainer" component={NewPasswordContainer} />
            <Stack.Screen name="SignupContainer" component={SignupContainer} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
