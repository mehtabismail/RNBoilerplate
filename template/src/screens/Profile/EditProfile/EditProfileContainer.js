import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/hooks'
import { CustomButton, CustomHeader, CustomTextInput, ScreenWrapper } from '@/components'
import { useDispatch } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Colors } from '@/theme/Variables'
import { user_data } from '@/Config/dummyData'

const EditProfileContainer = () => {
    const { Layout, Images, Fonts, Gutters } = useTheme()
    const [edit, setEdit] = useState(false)
    const [userData, setUserData] = useState({
        name: "Mehtab Ismail",
        username: "mehtabismail",
        email: "mehtab@gmail.com",
        phone: '+923417039563',
        address: 'Johar town'
    })

    const dispatch = useDispatch()


    const handleChangeInput = (value, fieldName) => {
        console.log(value, fieldName, "checking props")
        setUserData({
            ...userData,
            [fieldName]: value
        })
    }

    return (
        <ScreenWrapper>
            <CustomHeader backButton centerText={"Profile"} />
            <View style={[Layout.fill]}>
                <View style={[Layout.fullWidth, Layout.center]}>
                    <View>
                        {!!edit && <TouchableOpacity style={[styles.icon]}>
                            <Images.svg.Edit.default height={24} width={24} />
                        </TouchableOpacity>}
                        <View style={[Layout.center, { height: 124, width: 124, borderRadius: 124 / 2, borderWidth: 2, borderColor: Colors.primary }]}>
                            <Image source={Images.png.User} style={{ height: 120, width: 120, borderRadius: 120 / 2 }} />
                        </View>
                    </View>
                    <View style={[Layout.center]}>
                        <Text style={[Fonts.nunito16, Fonts.semiboldWeight, Gutters.tinyTMargin, Gutters.littleBMargin]}>{user_data.name}</Text>
                        <Text style={[Fonts.nunito14, Fonts.regularWeight]}>{user_data.username}</Text>

                    </View>
                </View>
                <View style={[Layout.fill, Layout.justifyContentBetween]}>
                    <View>
                        <CustomTextInput fieldName="name" placeholder="Enter Name" headingText="Name" handleChangeInput={handleChangeInput} editable={edit} value={userData.name} />
                        <CustomTextInput fieldName="email" placeholder="Enter Email" headingText="Email" handleChangeInput={handleChangeInput} editable={edit} value={userData.email} />
                        <CustomTextInput fieldName="phone" placeholder="Enter Phone Number" headingText="Phone Number" handleChangeInput={handleChangeInput} editable={edit} value={userData.phone} />
                        <CustomTextInput fieldName="address" placeholder="Enter Address" headingText="Address" handleChangeInput={handleChangeInput} editable={edit} value={userData.address} />
                    </View>
                    <View style={[Gutters.smallVMargin]}>
                        <CustomButton btnText={!edit ? "Edit Profile" : "Save"} onPress={() => setEdit(!edit)} />
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}


const styles = StyleSheet.create({
    singleInputContainer: {
        marginTop: 2,
        marginBottom: 8,
    },
    inputTitleTxt: {
        marginVertical: 6,
        fontSize: RFValue(12),
        color: Colors.text,
    },
    inputField: {
        height: heightPercentageToDP('5.4%'),
        backgroundColor: Colors.background,
    },
    icon: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: Colors.white,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: 0
    }
});

export default EditProfileContainer