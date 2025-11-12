import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./styles";

export default function IconBadge({
    showBadge = false,
    badgeStyle,
    onClick,
    children,
}: {
    showBadge?: boolean,
    badgeStyle?: StyleProp<ViewStyle>,
    onClick?: () => void,
    children: React.ReactNode,
}) {
    return (
        <TouchableOpacity style={[styles.container, badgeStyle]} onPress={onClick}>
            {children}
            {showBadge && <View style={styles.dot} />}
        </TouchableOpacity>
    );
}
