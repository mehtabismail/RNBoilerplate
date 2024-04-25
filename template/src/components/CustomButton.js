import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks'

const CustomButton = ({ onPress, btnText, customStyle }) => {
    const { Layout, Gutters, Colors, Fonts } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[
                Layout.fullWidth,
                Layout.center,
                Gutters.smallRadius,
                Gutters.smallShadow,
                { height: 48, backgroundColor: Colors.primary },
                customStyle
            ]}
            onPress={onPress}
        >
            <Text style={[Fonts.nunito16, Fonts.mediumWeight, { color: Colors.white }]}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton