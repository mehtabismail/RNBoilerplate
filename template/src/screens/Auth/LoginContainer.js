import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomButton, CustomTextInput, ScreenWrapper } from '@/components';
import { useTheme } from '@/hooks';
import { useDispatch } from 'react-redux';
import { storeToken } from '@/store/auth/AuthSlice';

const LoginContainer = ({ navigation }) => {
    const { Layout, Images, Colors, Fonts, Gutters } = useTheme();

    const dispatch = useDispatch();

    const handleChangeInput = props => {
        console.log(props);
    };

    const loginPressHandler = () => {
        dispatch(storeToken('123'));
    };


    return (
        <View style={[Layout.fill, Layout.bgColor]}>
            <View style={[Layout.fullWidth, Layout.height40, Layout.center]}>
                <Images.svg.Logo.default />
            </View>
            <View
                style={[
                    Layout.fill,
                    Gutters.largeTRRadius,
                    Gutters.largeTLRadius,
                    Gutters.darkShadow,
                    { backgroundColor: Colors.grey1 },
                ]}>
                <View style={[Layout.height20, Layout.fullWidth, Layout.center]}>
                    <Text style={[Fonts.nunito32, Fonts.semiboldWeight]}>Login</Text>
                </View>
                <View style={[Layout.selfCenter, Layout.width90]}>
                    <CustomTextInput
                        placeholder="Enter Email"
                        headingText="Email"
                        handleChangeInput={handleChangeInput}
                    />
                    <CustomTextInput
                        secureTextEntry
                        placeholder="Enter Password"
                        headingText="Password"
                        handleChangeInput={handleChangeInput}
                    />
                    <View style={[Gutters.smallTMargin]}>
                        <CustomButton btnText="Login" onPress={loginPressHandler} />
                    </View>
                    <View
                        style={[
                            Layout.fullWidth,
                            Layout.row,
                            Layout.justifyContentBetween,
                            Gutters.tinyTMargin,
                        ]}>
                        <View style={[Layout.row]}>
                            <Text style={[Fonts.nunito14, Fonts.regularWeight]}>
                                Dont have an account?
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('SignupContainer')}>
                                <Text
                                    style={[
                                        Fonts.nunito14,
                                        Fonts.regularWeight,
                                        { color: Colors.primary },
                                    ]}>
                                    {' '}
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('OtpContainer')}>
                            <Text style={[Fonts.nunito14, Fonts.regularWeight]}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LoginContainer;
