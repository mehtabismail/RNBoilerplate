import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/hooks'


const CustomToggleButton = ({ value, toggleHandler }) => {
    const { Colors, Layout, Gutters, darkMode } = useTheme()
    const [toggle, setToggle] = useState(value)

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setToggle(!toggle)
                    toggleHandler &&
                        toggleHandler({ value: !toggle })
                }}
                style={[
                    Gutters.lightShadow,
                    {
                        width: 36,
                        height: 22,
                        backgroundColor:
                            Colors.white,
                        borderRadius: 20,
                        justifyContent: 'center',
                        borderWidth: 1, borderColor: Colors.primary
                    },
                ]}
            >
                {toggle !== true ? (
                    <View
                        style={[
                            {
                                backgroundColor: Colors.text_5A6F82,
                                width: 16,
                                height: 16,
                                borderRadius: 8,
                                marginLeft: 2,
                            },
                        ]}
                    />
                ) : (
                    <View
                        style={[
                            {
                                backgroundColor: Colors.primary,
                                width: 16,
                                height: 16,
                                borderRadius: 8,
                                alignSelf: 'flex-end',
                                marginRight: 2,
                            },
                        ]}
                    />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default CustomToggleButton
