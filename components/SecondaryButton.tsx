import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

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

const styles = StyleSheet.create({
    secondaryButton: {
        width: "100%",
        backgroundColor: "#FF5790",
        borderRadius: 16,
    },
    secondaryButtonText: {
        color: "#F3F3F3",
        margin: 16,
        fontFamily: "Nunito Sans",
        fontSize: 22,
        fontWeight: "300",
        textAlign: "center",
    },
})
