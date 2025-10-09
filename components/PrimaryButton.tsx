import { StyleSheet, Text, TouchableOpacity } from "react-native";

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

const styles = StyleSheet.create({
    primaryButton: {
        width: "100%",
        backgroundColor: "#004CFF",
        borderRadius: 16,
    },
    primaryButtonText: {
        color: "#F3F3F3",
        margin: 16,
        fontSize: 22,
        fontWeight: "300",
        textAlign: "center",
    },
})
