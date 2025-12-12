import { useAuth } from "@/src/hooks/useAuth";
import { ThemeProvider, useTheme } from "@/src/providers/ThemeProvider";
import { store } from "@/src/redux/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { Platform } from "react-native";
import { REVENUE_CAT_API_KEY } from "@/src/config";

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

  const { token, restoreSession } = useAuth();
  const isLoggedIn = Boolean(token);

  useEffect(() => {
    const prepare = async () => {
      restoreSession();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        if (isLoggedIn) {
          router.replace("/shop/(tabs)/home");
        } else {
          router.replace("/");
        }
      }
    }
    prepare();
  }, [fontsLoaded, isLoggedIn, restoreSession, router]);

  if (!fontsLoaded) return null;

  return (
    <Stack >
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='auth' options={{ headerShown: false }} />
      <Stack.Screen name='shop' options={{ headerShown: false }} />
      <Stack.Screen name='product-detail' options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {

  const queryClient = new QueryClient()
  useEffect(() => {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

    // Platform-specific API keys
    const iosApiKey = REVENUE_CAT_API_KEY!;
    const androidApiKey = REVENUE_CAT_API_KEY!;

    if (Platform.OS === 'ios') {
      Purchases.configure({ apiKey: iosApiKey });
    } else if (Platform.OS === 'android') {
      Purchases.configure({ apiKey: androidApiKey });
    }
    getCustomerInfo();
  }, []);

  async function getCustomerInfo() {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      console.log("Customer Info", JSON.stringify(customerInfo, null, 2));

    } catch (e) {
      console.log("Customer Info error", e);
    }
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <RootContent />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
