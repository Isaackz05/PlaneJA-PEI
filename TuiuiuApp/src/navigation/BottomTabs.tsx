import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../pages/Home/HomeScreen";
import SearchScreen from "../pages/Search/SearchScreen";
import FavoritesScreen from "../pages/Favorites/FavoritesScreen";
import ProfileScreen from "../pages/Profile/ProfileScreen";

import { COLORS } from "../constants/colors";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: COLORS.primary,

        tabBarInactiveTintColor: "#999",

        tabBarShowLabel: false,

        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;

            case "Buscar":
              iconName = "search";
              break;

            case "Favoritos":
              iconName = "heart";
              break;

            default:
              iconName = "person";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Buscar"
        component={SearchScreen}
      />

      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}