import { StyleProp, View, ViewStyle } from "react-native";
import styles from "./styles";

export default function IconBadge({
    showBadge = false,
    badgeStyle,
    children,
}: {
    showBadge?: boolean,
    badgeStyle?: StyleProp<ViewStyle>,
    children: React.ReactNode,
}) {
    return (
        <View style={[styles.container, badgeStyle]} >
            {children}
            {showBadge && <View style={styles.dot} />}
        </View>
    );
}
