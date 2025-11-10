import { LoginDataProvider } from "@/src/providers/LoginDataProvider";
import { Stack } from "expo-router";

export default function LoginLayout() {
    return (
        <LoginDataProvider>
            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name='index' options={{ headerShown: false }} />
                <Stack.Screen name='password' options={{ headerShown: false }} />
                <Stack.Screen name='reset-password' options={{ headerShown: false }} />
            </Stack>
        </LoginDataProvider>
    )
};
