import React from 'react';
import StorybookUIRoot from './storybook';
import './App.css';
import { TailwindProvider } from "tailwindcss-react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          { /* Screens */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Storybook" component={StorybookUIRoot} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
