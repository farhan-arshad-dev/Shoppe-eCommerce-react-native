import { Text, View } from "react-native";
import styles from "./styles";

export default function LiveTag() {
    return (
        <View style={styles.liveTextContainer}>
            <Text style={styles.liveText}>Live</Text>
        </View>
    )
}
