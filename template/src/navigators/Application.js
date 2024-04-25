import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { navigationRef } from "./utils";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks";
import { useSelector } from "react-redux";
import { TabNavigator, AuthNavigator } from ".";
import { LoginContainer } from "@/screens";

const Stack = createStackNavigator();

function ApplicationNavigator() {
  const { Layout, NavigationTheme, Gutters, Colors } = useTheme();
  const { t } = useTranslation();
  global.t = t;

  const { token } = useSelector((state) => state?.auth);

  return (
    <View style={[Layout.fullSize, { backgroundColor: Colors.background }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar
          translucent
          backgroundColor={Colors.white}
          barStyle={'dark-content'}
        />
        <View
          style={[
            Layout.fill,
            Gutters.statusBarHeight,
            { backgroundColor: Colors.white },
          ]}>
          {token ? <TabNavigator /> : <AuthNavigator />}
        </View>
      </NavigationContainer>
    </View>
  );
}

export default ApplicationNavigator;
