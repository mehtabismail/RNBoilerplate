import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import { useTheme } from '@/hooks';
import { FastImage } from "react-native-fast-image";

const CustomChatList = ({ data }) => {
    const { Layout, Gutters, Fonts, Colors } = useTheme()

    const RenderItem = ({ item }) => {
        return (
            <TouchableOpacity style={[Layout.row, Gutters.xTinyBMargin]}>
                <View>
                    <Image source={item.image} style={[{ height: 52, width: 52, borderRadius: 52 / 2 }]} />
                </View>
                <View style={[Layout.fill, Gutters.tinyLMargin]}>
                    <View style={[Layout.justifyContentBetween, Layout.row, Layout.fill, Layout.alignItemsCenter]}>
                        <Text style={[Gutters.littleBMargin, Fonts.nunito14, Fonts.semiboldWeight]}>
                            {item?.name}
                        </Text>
                        <Text style={[
                            Gutters.littleBMargin,
                            Fonts.nunito10, Fonts.regularWeight,
                            { color: Colors.text_5A6F82 }
                        ]}>
                            {item?.last_message_time + "min ago"}
                        </Text>
                    </View>

                    <View style={[Layout.justifyContentBetween, Layout.row, Layout.fill]}>
                        <Text style={[Fonts.nunito12, Fonts.regularWeight]}>{item?.message}</Text>
                        {
                            item?.count && <View style={[Layout.center, { height: 22, width: 22, borderRadius: 22 / 2, marginTop: -5, backgroundColor: Colors.primary }]}>
                                <Text style={[Fonts.nunito10, Fonts.regularWeight, { color: Colors.white }]}>{item?.count}</Text>
                            </View>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={[Layout.fill]}>
            <FlashList
                renderItem={RenderItem}
                estimatedItemSize={50}
                data={data}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CustomChatList