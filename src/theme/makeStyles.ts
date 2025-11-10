import { StyleSheet } from "react-native";
import { ThemeType } from "@/src/theme/index";
import { useTheme } from "@/src/providers/ThemeProvider";

// need to use makeStyles intated of using StyleSheet.create
export function makeStyles<
    T extends StyleSheet.NamedStyles<T> |
    StyleSheet.NamedStyles<any>
>(styles: (theme: ThemeType) => T) {
    return () => {
        const { theme } = useTheme();
        return StyleSheet.create(styles(theme));
    };
}
