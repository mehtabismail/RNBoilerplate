import { EditProfileContainer, ProfileContainer } from "@/screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ProfileNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ProfileContainer"
        component={ProfileContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileContainer"
        component={EditProfileContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
