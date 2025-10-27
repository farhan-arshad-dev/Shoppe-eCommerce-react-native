import { ThemeProvider, useTheme } from "@/src/theme/ThemeProvider";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const { theme } = useTheme();
  const [fontsLoaded] = useFonts({
    [theme.typography.fontFamily.RalewayBold]: require("@/assets/fonts/Raleway-Bold.ttf"),
    [theme.typography.fontFamily.NunitoSansLight]: require("@/assets/fonts/NunitoSans-Light.ttf"),
    [theme.typography.fontFamily.NunitoSansBold]: require("@/assets/fonts/NunitoSans-Bold.ttf"),
    [theme.typography.fontFamily.NunitoSansRegular]: require("@/assets/fonts/NunitoSans-Regular.ttf"),
    [theme.typography.fontFamily.PoppinsMedium]: require("@/assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack >
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='auth' options={{ headerShown: false }} />
          <Stack.Screen name='shop' options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
