import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader, CustomNotificationList } from '@/components'
import { useTheme } from '@/hooks'

const NotificationContainer = ({ navigation }) => {
    const { Layout, Colors } = useTheme()

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
            <View style={[Layout.screenWidth]}>
                <CustomHeader backButton={true} centerText="Notifications" onPress={goBack} />
            </View>
            <View style={[Layout.fill]}>
                <CustomNotificationList />
            </View>
        </View>
    )
}

export default NotificationContainer