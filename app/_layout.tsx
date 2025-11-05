import { RootState, store } from "@/src/redux/store/store";
import { ThemeProvider, useTheme } from "@/src/theme/ThemeProvider";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";

SplashScreen.preventAutoHideAsync();

function RootContent() {

  const router = useRouter();
  const { theme } = useTheme();

  const [fontsLoaded] = useFonts({
    [theme.typography.fontFamily.RalewayBold]: require("@/assets/fonts/Raleway-Bold.ttf"),
    [theme.typography.fontFamily.NunitoSansLight]: require("@/assets/fonts/NunitoSans-Light.ttf"),
    [theme.typography.fontFamily.NunitoSansBold]: require("@/assets/fonts/NunitoSans-Bold.ttf"),
    [theme.typography.fontFamily.NunitoSansRegular]: require("@/assets/fonts/NunitoSans-Regular.ttf"),
    [theme.typography.fontFamily.PoppinsMedium]: require("@/assets/fonts/Poppins-Medium.ttf"),
    [theme.typography.fontFamily.RalewayMedium]: require("@/assets/fonts/Raleway-Medium.ttf"),
    [theme.typography.fontFamily.RalewayExtraBold]: require("@/assets/fonts/Raleway-ExtraBold.ttf"),
  });

  const token = useSelector((state: RootState) => state.userData.token);
  const isLoggedIn = Boolean(token);

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        if (isLoggedIn) {
          router.replace("/shop/(tabs)/home");
        }
      }
    }
    prepare();
  }, [fontsLoaded, isLoggedIn]);

  if (!fontsLoaded) return null;

  return (
    <Stack >
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='auth' options={{ headerShown: false }} />
      <Stack.Screen name='shop' options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <RootContent />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
