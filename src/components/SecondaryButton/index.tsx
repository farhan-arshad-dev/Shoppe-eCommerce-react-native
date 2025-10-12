import { Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./styles";

export default function SecondaryButton({
    text, onPress, style
}: {
    text: string,
    onPress: () => void,
    style?: ViewStyle,
}
) {
    return (
        <TouchableOpacity style={[styles.secondaryButton, style]} onPress={onPress}>
            <Text style={styles.secondaryButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
