import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { useStyles } from "./styles";

export default function SecondaryButton({
    text, onPress, containerStyle
}: {
    text: string,
    onPress: () => void,
    containerStyle?: ViewStyle,
}
) {
    const styles = useStyles();
    return (
        <TouchableOpacity style={[styles.secondaryButton, containerStyle]} onPress={onPress}>
            <Text style={styles.secondaryButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
