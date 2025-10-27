import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useStyles } from "./styles";

export default function PrimaryButton({
    text,
    containerStyle,
    onPress
}: {
    text: string,
    containerStyle?: StyleProp<ViewStyle>,
    onPress: () => void
}
) {
    const styles = useStyles();
    return (
        <TouchableOpacity style={[styles.primaryButtonContainer, containerStyle]} onPress={onPress}>
            <Text style={styles.primaryButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
