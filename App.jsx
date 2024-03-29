import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Contact from "./src/screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "TELA INICIAL",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "TELA PROFILE",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "TELA CONTACT",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
