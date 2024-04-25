/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from "./theme";


/**
 * Colors
 */
export const Colors = {
  transparent: "rgba(0,0,0,0)",
  primary: "#983DFA",
  secondary: "#7A8EF2",
  tertiary: "#101116",
  white: "#ffffff",
  bg_white_F4F4F4: "#F4F4F4",
  black: "#000000",
  blur: '#00000090',
  accent: '#EF4444',
  error: '#dc3545',
  red: "#EE1111",
  text: '#16262E',
  grey: "grey",
  grey1: "#F3F3F3",
  light_grey: "lightgrey",
  background: "#FFFBFF",
  text_5A6F82: '#5A6F82',
  text_2E4756: "#2E4756",
  white_F8F2FF: '#F8F2FF',
  black_16262E: "#16262E",
  grey_EFF2FF: ' #EFF2FF',
  grey_E7E9F5: '#E7E9F5',
  border1: "#E7E9F5",
  lightGreen_DBF5EC: '#DBF5EC',
  dark_gray_676C6A: '#676C6A',

};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  // primary: Colors.purple_5B127E,
  background: "#EFEFEF",
  card: "#EFEFEF",
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const little = 5;
const tiny = 10;
const xTiny = 15;
const small = tiny * 2; // 20
const medium = 25;
const regular = tiny * 3; // 30
const sRegular = 35;
const xRegular = 40;
const xxRegular = 50;
const large = regular * 2; // 60
const xLarge = xRegular * 2; // 60
export const MetricsSizes = {
  little,
  tiny,
  xTiny,
  small,
  medium,
  regular,
  sRegular,
  xRegular,
  xxRegular,
  large,
  xLarge,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
