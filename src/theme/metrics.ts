import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

export const metrics = {
    screenWidth: width,
    screenHeight: height,
    isIOS: Platform.OS === "ios",
    statusBarHeight: StatusBar.currentHeight || 0,
    borderRadius: {
        xSmall: 4,
        small: 6,
        medium: 10,
        large: 16,
        xlarge: 24,
    },
    elevation: {
        small: 2,
        meduim: 4,
        large: 6,
    },
    spacing: {
        // Tiny / Minimal spacing
        xxxSmall: 2,
        xxSmall: 4,
        xSmall: 8,

        // Base / Common spacing
        small: 12,
        smallMedium: 14, // optional bridge value
        medium: 16,
        mediumLarge: 18, // optional bridge value

        // Larger content spacing
        large: 20,
        xLarge: 24,
        xxLarge: 32,

        // Section / screen-level spacing
        xxxLarge: 40,
        huge: 48,
        xHuge: 56,
        xxHuge: 64,
    }
};
