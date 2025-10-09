import { Stack } from "expo-router";

export default function LoginLayout() {
    return <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='password' options={{ headerShown: false }} />
    </Stack>
};
