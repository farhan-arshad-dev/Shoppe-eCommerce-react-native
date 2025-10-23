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
        xxSmall: 4,
        xSmall: 8,
        smallMedium: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 32,
    }
};
