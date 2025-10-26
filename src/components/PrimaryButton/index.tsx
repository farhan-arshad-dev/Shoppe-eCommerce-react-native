import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useStyles } from "./styles";

export default function PrimaryButton({
    text,
    style,
    onPress
}: {
    text: string,
    style?: StyleProp<ViewStyle>,
    onPress: () => void
}
) {
    const styles = useStyles();
    return (
        <TouchableOpacity style={[styles.primaryButtonContainer, style]} onPress={onPress}>
            <Text style={styles.primaryButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
