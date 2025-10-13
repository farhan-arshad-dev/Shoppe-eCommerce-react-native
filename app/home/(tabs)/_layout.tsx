import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import MenuIcon from "@/assets/images/menu.png"
import ProfileIcon from "@/assets/images/profile-icon.png"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    borderWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 84,
                },
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: "#004CFF",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} >
                            <Feather name="home" size={24} color={focused ? "#000000" : "#004CFF"} />
                        </TabIcon>
                    ),
                }}
            />
            <Tabs.Screen
                name="wishlist"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} >
                            <FontAwesome5 name="heart" size={24} color={focused ? "#000000" : "#004CFF"} />
                        </TabIcon>
                    ),
                }}
            />

            <Tabs.Screen
                name="menu"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} >
                            <Image
                                source={MenuIcon}
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? "#000000" : "#004CFF", // ✅ changes color dynamically
                                    resizeMode: "contain",
                                }}
                            />
                        </TabIcon>
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} >
                            <Feather name="shopping-bag" size={24} color={focused ? "#000000" : "#004CFF"} />
                        </TabIcon>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} >
                            <Image
                                source={ProfileIcon}
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? "#000000" : "#004CFF", // ✅ changes color dynamically
                                    resizeMode: "contain",
                                }}
                            />
                        </TabIcon>
                    ),
                }}
            />
        </Tabs>
    );
}

function TabIcon({
    focused,
    children,
}: {
    focused: boolean;
    children: React.ReactNode,
}) {
    return (
        <View
            style={{
                height: "100%",
                alignItems: "center",
                marginTop: 14,
            }}
        >
            {children}
            {focused && (
                <View
                    style={{
                        width: 12,
                        height: 3,
                        borderRadius: 2,
                        backgroundColor: "#000000",
                        marginTop: 6,
                    }}
                />
            )}
        </View>
    );
}
