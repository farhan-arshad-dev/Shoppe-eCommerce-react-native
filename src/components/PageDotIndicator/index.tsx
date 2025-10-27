import { View } from "react-native";
import { useStyle } from "./styles";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function PageDotIndicator({
    count,
    activeIndex,
    size = 20,
    spacing = 20,
}: {
    count: number;
    activeIndex: number;
    size?: number;
    spacing?: number;
}) {
    const styles = useStyle();
    const { theme } = useTheme();

    const activeColor = theme.colors.primary
    const inactiveColor = theme.colors.primaryLight
    return (
        <View style={[styles.container, { gap: spacing }]}>
            {Array.from({ length: count }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        {
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                            backgroundColor:
                                index === activeIndex ? activeColor : inactiveColor,
                        },
                    ]}
                />
            ))}
        </View>
    );
}
