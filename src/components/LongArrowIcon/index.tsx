import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
import styles from "./styles";

export default function LoginArrowIcon() {
    return (
        <View style={styles.loginArrowIcon}>
            <FontAwesome6 name="arrow-right-long" size={14} color="#ffffff" />
        </View>
    );
}
