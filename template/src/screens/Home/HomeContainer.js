import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks'
import { CustomHeader, ScreenWrapper } from '@/components'
import { navigationRef } from '@/navigators/utils'

const HomeContainer = () => {
    const { Layout, Gutters, Fonts, Images, Colors } = useTheme()
    return (
        <ScreenWrapper>
            <CustomHeader
                centerText="Home Header"
                rightIcon={"Notification"}
                onPressRight={() => navigationRef.navigate('NotificationContainer')}
            />
            <View style={[Layout.fill, Gutters.xTinyTMargin]}>

            </View>
        </ScreenWrapper>
    )
}

export default HomeContainer