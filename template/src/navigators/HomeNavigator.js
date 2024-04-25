import { HomeContainer, NotificationContainer } from "@/screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationContainer"
        component={NotificationContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
