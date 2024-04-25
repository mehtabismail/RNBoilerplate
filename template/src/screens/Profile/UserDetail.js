import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks'
import { Colors } from '@/theme/Variables'
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from 'react-redux'
import { general_settings } from '@/Config/dummyData'
import { persistor } from '@/store/store'
import { logout } from '@/store/auth/AuthSlice'

const UserDetail = () => {
    const { Layout, Gutters, Fonts, Images } = useTheme()

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const RenderItem = ({ item }) => {
        let svg_string = item?.svg
        const Icon = svg_string ? Images.svg[svg_string].default : null;

        const logoutHandler = async () => {
            console.log("logging out...")
            dispatch(logout())
            await persistor.purge()
            await persistor.flush()
        }

        return (
            <TouchableOpacity
                onPress={() => item?.path ? navigation.navigate(item?.path) : logoutHandler()}
                style={[
                    Gutters.lightShadow,
                    Gutters.xTinyBMargin,
                    Layout.justifyContentCenter,
                    Gutters.smallHPadding,
                    styles.list
                ]}
            >
                <View style={[Layout.row, Layout.alignItemsCenter]}>
                    <Icon />
                    <Text style={[Fonts.nunito14, Fonts.mediumWeight, Gutters.tinyLMargin]}>{item?.value}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={[Layout.fill]}>
            <FlatList
                data={general_settings}
                renderItem={RenderItem}
                contentContainerStyle={[Layout.selfCenter, { width: '98%' }]}
            />
        </View>
    )
}

export default UserDetail


const styles = StyleSheet.create({
    list: {
        height: 56,
        borderRadius: 16,
        backgroundColor: Colors.white,
    }
})