import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks'
import { useNavigation } from '@react-navigation/native'
const CustomHeader = (
    {
        rightIcon,
        leftIcon,
        centerIcon,
        centerText,
        rightInvertedX,
        leftInvertedX,
        onPressLeft,
        onPressRight,
        RightIconComponnet,
        LeftIconComponnet,
        customStyles,
        backButton,
        onPress
    }) => {
    const { Layout, Images, Gutters, Fonts } = useTheme()

    const navigation = useNavigation()

    const LIcon = leftIcon ? Images.svg[leftIcon].default : null;
    const CIcon = centerIcon ? Images.svg[centerIcon].default : null;
    const RIcon = rightIcon ? Images.svg[rightIcon].default : null;

    const RenderRightComponent = () => {
        return RightIconComponnet({ Icon: RIcon, name: rightIcon })
    }

    const RenderLeftComponent = () => {
        return LeftIconComponnet({ Icon: LIcon, name: leftIcon })
    }

    return (
        <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, Gutters.tinyVPadding, customStyles]}>
            <View style={[Layout.justifyContentStart, Layout.row, { width: '30%' }]}>
                {backButton ? <TouchableOpacity style={[Gutters.littleVPadding]} onPress={() => navigation.goBack()}>
                    <Images.svg.BackButton.default />
                </TouchableOpacity> : <>
                    {LeftIconComponnet ?
                        RenderLeftComponent()
                        : leftIcon && <TouchableOpacity onPress={() => onPressLeft && onPressLeft()} style={[leftInvertedX && Layout.invertedX]}>
                            <LIcon />
                        </TouchableOpacity>}
                </>}
            </View>
            <View style={[Layout.justifyContentCenter, Layout.row, { width: '40%', }]}>
                {centerIcon ? <CIcon /> : centerText && <Text style={[Fonts.nunito18, Fonts.semiboldWeight, Layout.textAlign]}>{centerText}</Text>}
            </View>
            {rightIcon || RightIconComponnet ?
                <View style={[Layout.justifyContentEnd, Layout.row, { width: '30%' }]}>
                    {
                        RightIconComponnet ?
                            RenderRightComponent()
                            : <TouchableOpacity onPress={() => onPressRight && onPressRight()} style={[rightInvertedX && Layout.invertedX]}>
                                <RIcon />
                            </TouchableOpacity>
                    }
                </View> : <View style={[Layout.justifyContentEnd, Layout.row, { width: '30%' }]}></View>
            }
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({})