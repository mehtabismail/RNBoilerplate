import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@/hooks'
import { ScreenWrapper } from '@/components'

const SplashContainer = ({ navigation }) => {
    const { Layout } = useTheme()

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LoginContainer')
        }, 2000);
        return () => {

        };
    }, [])
    return (
        <View style={[Layout.fill, Layout.center]}><Text>Splash Container</Text></View>
    )
}

export default SplashContainer