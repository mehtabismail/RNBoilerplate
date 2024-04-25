import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomHeader, CustomTextInput, ScreenWrapper } from '@/components'
import { useTheme } from '@/hooks'
import { navigationRef } from '@/navigators/utils'
import { useSelector } from 'react-redux'

const ResetPasswordContainer = () => {
    const { Images, Layout, Gutters, Fonts } = useTheme()

    const { token } = useSelector(state => state.auth)


    const handleChangeInput = (props) => {
        console.log(props)
    }

    const loginPressHandler = () => {
        !token && navigationRef.navigate('OtpContainer')
    }

    return (
        <ScreenWrapper>
            <CustomHeader backButton />
            <View style={[Layout.height20, Layout.center]}>
                <Images.svg.Logo.default />
            </View>
            <View style={[Layout.center]}>
                <Text style={[Fonts.nunito18, Fonts.semiboldWeight]}>{token ? "Change Password" : "Reset Password"}</Text>
            </View>
            <View style={[Gutters.tinyTMargin]}>
                {!token && <CustomTextInput placeholder="Enter Your Email" headingText="Enter Email" handleChangeInput={handleChangeInput} />}
                {token && <>
                    <CustomTextInput placeholder="Enter New Password" headingText="New Password" handleChangeInput={handleChangeInput} />
                    <CustomTextInput placeholder="Enter Confirm Password" headingText="Confirm Password" handleChangeInput={handleChangeInput} />
                </>}
                <View style={[Gutters.smallTMargin]}>
                    <CustomButton btnText="Confirm" onPress={loginPressHandler} />
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default ResetPasswordContainer