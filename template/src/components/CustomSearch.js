import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/hooks'

const CustomSearch = (props) => {
    const { Colors, Gutters, Layout, Images } = useTheme()
    const [focused, setFocused] = useState(false)
    return (
        <View style={[Layout.row]}>
            {!focused && <View style={[Layout.justifyContentCenter, Layout.center, Layout.absolute, { zIndex: 1, height: 48, width: 48 }]}><Images.svg.Search.default /></View>}
            <TextInput
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={[Gutters.borderWidth, Layout.fullWidth, { height: 48, paddingHorizontal: focused ? 15 : 48, borderRadius: 48 / 2, borderColor: focused ? Colors.primary : Colors.border_textinput }]}
            />
        </View>
    )
}

export default CustomSearch