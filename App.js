import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ExploreIcon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
//import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Home from "./src/screens/Home";
import { RNCamera } from "react-native-camera";
import Destination from "./src/screens/Destination";
import Search from "./src/screens/Search";
import Onboarding from "./src/screens/Onboarding";
import CameraScreen from "./src/screens/CameraScreen";
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        options={{ title: "My home" }}
        component={Home}
      />
      <Stack.Screen
        name="camerascreen"
        component={CameraScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
const SearchStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        options={{ headerShown: true }}
        component={Search}
        options={{ title: "Search Places" }}
      />
    </Stack.Navigator>
  );
};
const OnboardingStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="search" name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};
const DestinationStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="destination" component={Destination} />
    </Stack.Navigator>
  );
};
const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "search") {
            iconName = "search";
          } else if (route.name === "onboarding") {
            iconName = "subscriptions";
          } else if (route.name == "destination") {
            iconName = "explore";
          } else if (route.name == "profile") {
            iconName = "account-circle";
          }

          // You can return any component that you like here!
          return <ExploreIcon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="home"
        component={Home}
        options={{
          title: "home",
          // headerShown: true,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ headerShown: true }}
        component={SearchStackScreen}
      />
      <Tabs.Screen name="onboarding" component={Onboarding} />
      <Tabs.Screen name="destination" component={Destination} />
      <Tabs.Screen name="profile" component={Profile} />
    </Tabs.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="rootHome"
          component={RootHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="camerascreen"
          component={CameraScreen}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        /> */}
      {/* </Stack.Navigator>  */}
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === "home") {
              iconName = "home";
            } else if (route.name === "search") {
              iconName = "search";
            } else if (route.name === "onboarding") {
              iconName = "subscriptions";
            } else if (route.name == "destination") {
              iconName = "explore";
            } else if (route.name == "profile") {
              iconName = "account-circle";
            }

            // You can return any component that you like here!
            return <ExploreIcon name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#5352ed",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="home"
          component={HomeStackScreen}
          options={{
            title: "home",
            // headerShown: true,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{ headerShown: true }}
          component={SearchStackScreen}
        />
        <Tabs.Screen name="onboarding" component={OnboardingStackScreen} />
        <Tabs.Screen name="destination" component={DestinationStackScreen} />
        <Tabs.Screen name="profile" component={ProfileStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
