import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#60a5fa",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          borderTopWidth: 1,
          height: 100,
          paddingBottom: 30,
          paddingTop: 15,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 4,
        },

        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Event",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Store",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="forum"
        options={{
          title: "Forum",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
