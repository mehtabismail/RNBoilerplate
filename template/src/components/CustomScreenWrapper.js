import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks'

const CustomScreenWrapper = ({ children, customStyle }) => {
    const { Layout, Colors } = useTheme()

    return (
        <View style={[Layout.fill, Layout.bgColor, customStyle]}>
            <View style={[Layout.screen]}>
                {children ? children : <Text>Page Content not Exist</Text>}
            </View>
        </View>
    )
}

export default CustomScreenWrapper