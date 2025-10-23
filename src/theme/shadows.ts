import { Platform } from "react-native";
import type { ThemeType } from "./index";

export const createShadows = (theme: ThemeType) => ({
    small: {
        backgroundColor: theme.colors.background,
        ...Platform.select({
            ios: {
                shadowColor: theme.colors.shadow,
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: theme.metrics.borderRadius.xSmall,
            },
            android: {
                elevation: theme.metrics.elevation.small
            },
        }),
    },
    medium: {
        backgroundColor: theme.colors.background,
        ...Platform.select({
            ios: {
                shadowColor: theme.colors.shadow,
                shadowOpacity: 0.15,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: theme.metrics.borderRadius.small
            },
            android: {
                elevation: theme.metrics.elevation.meduim
            },
        }),
    },
    large: {
        backgroundColor: theme.colors.background,
        ...Platform.select({
            ios: {
                shadowColor: theme.colors.shadow,
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: theme.metrics.borderRadius.medium
            },
            android: {
                elevation: theme.metrics.elevation.large
            },
        }),
    },
});
