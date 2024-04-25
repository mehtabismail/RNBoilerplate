/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from "react-native";
import Fonts from "./assets/Fonts";
import { sHight } from "@/utils/ScreenDimentions";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ThemeVariables } from "./theme";
export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    nunito8: {
      color: Colors.text, fontSize: RFValue(8, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(10, sHight(100)),
    },
    nunito10: {
      color: Colors.text, fontSize: RFValue(10, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(12.1, sHight(100)),
    },
    nunito12: {
      color: Colors.text, fontSize: RFValue(12, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(12, sHight(100)),
    },
    nunito14: {
      color: Colors.text, fontSize: RFValue(14, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(22, sHight(100)),
    },
    nunito16: {
      color: Colors.text, fontSize: RFValue(16, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(24, sHight(100)),
    },
    nunito18: {
      color: Colors.text, fontSize: RFValue(18, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(30, sHight(100)),
    },

    nunito20: {
      color: Colors.text, fontSize: RFValue(20, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(30, sHight(100)),
    },
    nunito22: {
      color: Colors.text, fontSize: RFValue(22, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(30, sHight(100)),
    },
    nunito24: {
      color: Colors.text, fontSize: RFValue(24, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(28, sHight(100)),
    },
    nunito28: {
      color: Colors.text, fontSize: RFValue(28, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(40, sHight(100)),
    },
    nunito32: {
      color: Colors.text, fontSize: RFValue(32, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(40, sHight(100)),
    },
    nunito30: {
      color: Colors.text, fontSize: 30,
      fontFamily: Fonts.Nunito,
    },
    nunito35: {
      color: Colors.text, fontSize: sHight(3.65),
      fontFamily: Fonts.Nunito,
      lineHeight: sHight(4.85),
    },
    nunito40: {
      color: Colors.text, fontSize: RFValue(40, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(48, sHight(100)),
    },
    nunito56: {
      color: Colors.text, fontSize: RFValue(56, sHight(100)),
      fontFamily: Fonts.Nunito,
      lineHeight: RFValue(66, sHight(100)),
    },
    boldWeight: {
      fontWeight: "bold",
    },
    lightWeight: {
      fontWeight: "200",
    },
    regularWeight: { fontWeight: "400" },
    mediumWeight: { fontWeight: "600" },
    semiboldWeight: { fontWeight: "700" },
    textCapitalize: {
      textTransform: "capitalize",
    },
    textUppercase: {
      textTransform: "uppercase",
    },
    textCenter: {
      textAlign: "center",
    },
    textJustify: {
      textAlign: "justify",
    },
    textLeft: {
      textAlign: "left",
    },
    textRight: {
      textAlign: "right",
    },
    textError: {
      color: Colors.error,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLobster: {
      fontFamily: "lobster",
      fontWeight: "normal",
    },
  });
}
