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
        smallMedium: 8,
        medium: 10,
        mediumLarge: 12,
        large: 14,
        xlarge: 18,
        xxLarge: 24,
        xxxLarge: 32,
        huge: 40,
        xHuge: 48,
        xxHuge: 60,
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
    },
    iconCardSize: {
        logoCardSize: 134,
        flagIcon: 16,
        profilePicCard: 105,
        profilePic: 91,
        infoIcon: 14,
        modalInfoIcon: 80,
        modalInfoOuterCircle: 50,
        modalInfoInnerCircle: 24,
    }
};
