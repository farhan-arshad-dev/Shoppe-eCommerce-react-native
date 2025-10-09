import { StyleSheet, TextInput, TextStyle } from "react-native";

export default function PrimaryInputText({
    placeHolder,
    textStyle,
}: {
    placeHolder: string
    textStyle: TextStyle,
}) {
    return (
        <TextInput
            style={[styles.primaryInput, textStyle]}
            placeholder={placeHolder}
            placeholderTextColor="#D2D2D2"
            autoCapitalize='none'
            keyboardType='email-address'
        />
    );
}

const styles = StyleSheet.create({
    primaryInput: {
        width: "100%",
        backgroundColor: "#F8F8F8",
        fontSize: 14,
        padding: 16,
        borderRadius: 60,
        marginBottom: 8,
        textAlign: "left"
    },
});