import { createStackNavigator } from "@react-navigation/stack";
import { ChatContainer } from "@/screens";

const Stack = createStackNavigator();

function ChatNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ChatContainer"
        component={ChatContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ChatNavigator;
