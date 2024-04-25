import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomHeader, CustomTextInput, ScreenWrapper } from '@/components'
import { useTheme } from '@/hooks'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const OtpContainer = () => {
    const { Images, Layout, Gutters, Fonts } = useTheme()
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handleChangeInput = (props) => {
        console.log(props)
    }

    const loginPressHandler = () => {
        console.log("Submit Handler")
    }

    return (
        <ScreenWrapper>
            <CustomHeader backButton />
            <View style={[Layout.height20, Layout.center]}>
                <Images.svg.Logo.default />
            </View>
            <View style={[Layout.center]}>
                <Text style={[Fonts.nunito18, Fonts.semiboldWeight]}>Enter OTP</Text>
            </View>
            <View style={[Gutters.tinyTMargin]}>
                <Text style={[Fonts.nunito14, Fonts.regularWeight, { textAlign: 'center' }]}>Enter the OTP that has been sent to your provided email.</Text>
                <View style={[Layout.selfCenter, Layout.width80]}>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                        testID="my-code-input"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                <View style={[Gutters.smallTMargin]}>
                    <CustomButton btnText="Submit" onPress={loginPressHandler} />
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default OtpContainer

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});
