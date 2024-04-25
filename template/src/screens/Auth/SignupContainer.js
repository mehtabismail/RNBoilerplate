import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomButton, CustomHeader, CustomTextInput, ScreenWrapper } from '@/components'
import { useTheme } from '@/hooks'
import { useDispatch } from 'react-redux'
import { storeToken } from '@/store/auth/AuthSlice'

const SignupContainer = ({ navigation }) => {
    const { Layout, Images, Colors, Fonts, Gutters } = useTheme()

    const dispatch = useDispatch()


    const handleChangeInput = (props) => {
        console.log(props)
    }

    const loginPressHandler = () => {
        dispatch(storeToken("123"))
    }

    return (
        <View style={[Layout.fill, Layout.bgColor]}>
            <View style={[Layout.screenWidth]}>
                <CustomHeader backButton />
            </View>
            <View style={[Layout.fullWidth, Layout.height40, Layout.center]}>
                <Images.svg.Logo.default />
            </View>
            <View style={[Layout.fill, Gutters.largeTRRadius, Gutters.largeTLRadius, Gutters.lightShadow, { backgroundColor: Colors.grey1 }]}>
                <View style={[Layout.height20, Layout.fullWidth, Layout.center]}>
                    <Text style={[Fonts.nunito32, Fonts.semiboldWeight]}>
                        Signu Up
                    </Text>
                </View>
                <View style={[Layout.selfCenter, Layout.width90]}>
                    <CustomTextInput placeholder="Enter Email" headingText="Email" handleChangeInput={handleChangeInput} />
                    <CustomTextInput secureTextEntry placeholder="Enter Password" headingText="Password" handleChangeInput={handleChangeInput} />
                    <View style={[Gutters.smallTMargin]}>
                        <CustomButton btnText="Sign Up" onPress={loginPressHandler} />
                    </View>
                    <View style={[Layout.fullWidth, Layout.row, Layout.justifyContentBetween, Gutters.tinyTMargin]}>
                        <View style={[Layout.row, Layout.fullWidth, Layout.center]}>
                            <Text style={[Fonts.nunito14, Fonts.regularWeight]}>Already have an account?</Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('LoginContainer')}
                            >
                                <Text style={[Fonts.nunito14, Fonts.regularWeight, { color: Colors.primary }]}> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SignupContainer