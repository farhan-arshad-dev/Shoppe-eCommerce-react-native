import { Text, TouchableOpacity } from "react-native";
import { useCommonStyles } from "@/src/styles/commonStyles";

export default function PrimaryButton({
    text, onPress
}: {
    text: string,
    onPress: () => void
}
) {
    const commonStyles = useCommonStyles();
    return (
        <TouchableOpacity style={[commonStyles.primaryButtonContainer]} onPress={onPress}>
            <Text style={commonStyles.primaryButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
