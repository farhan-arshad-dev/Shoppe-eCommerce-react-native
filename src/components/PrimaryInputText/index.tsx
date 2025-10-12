import { TextInput, TextStyle } from "react-native";
import styles from "./styles";

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
