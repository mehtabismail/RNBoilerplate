import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomHeader, ScreenWrapper } from '@/components'
// import UserDetail from './UserDetail'
import { useTheme } from '@/hooks'
import { user_data } from '@/Config/dummyData'
import UserDetail from './UserDetail'

const ProfileContainer = () => {
    const { Layout, Images, Fonts, Gutters, Colors } = useTheme()
    return (
        <ScreenWrapper>
            <CustomHeader centerText={"Profile"} />
            <View style={[Layout.fill]}>
                <View style={[Layout.fullWidth, Layout.center, Gutters.tinyBMargin]}>
                    <View style={[Layout.center, { height: 124, width: 124, borderRadius: 124 / 2, borderWidth: 2, borderColor: Colors.primary }]}>
                        <Image source={Images.png.User} style={{ height: 120, width: 120, borderRadius: 120 / 2 }} />
                    </View>
                    <View style={[Layout.center]}>
                        <Text style={[Fonts.nunito16, Fonts.semiboldWeight, Gutters.littleBMargin]}>{user_data.name}</Text>
                    </View>

                </View>
                <UserDetail />
            </View>
        </ScreenWrapper>
    )
}

export default ProfileContainer