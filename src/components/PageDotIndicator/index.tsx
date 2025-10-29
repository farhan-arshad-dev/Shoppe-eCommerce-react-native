import { StyleProp, View, ViewStyle } from "react-native";
import { useStyle } from "./styles";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function PageDotIndicator({
    count,
    activeIndex,
    size = 20,
    gap = 20,
    containerStyle,
    selectedDotStyle,
}: {
    count: number,
    activeIndex: number,
    size?: number,
    gap?: number,
    containerStyle?: StyleProp<ViewStyle>,
    selectedDotStyle?: StyleProp<ViewStyle>,
}) {
    const styles = useStyle();
    const { theme } = useTheme();

    const activeColor = theme.colors.primary
    const inactiveColor = theme.colors.primaryLight
    return (
        <View style={[styles.container, containerStyle, { gap: gap }]}>
            {Array.from({ length: count }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        {
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                        },
                        selectedDotStyle && index === activeIndex ? selectedDotStyle : {},
                        {
                            backgroundColor:
                                index === activeIndex ? activeColor : inactiveColor,
                        },
                    ]}
                />
            ))}
        </View>
    );
}
