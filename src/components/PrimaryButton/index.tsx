import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function PrimaryButton({
    text, onPress
}: {
    text: string,
    onPress: () => void
}
) {
    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <Text style={styles.primaryButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
