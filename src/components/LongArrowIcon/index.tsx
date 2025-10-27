import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
import { useStyles } from "./styles";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function LongArrowIcon() {
    const { theme } = useTheme();
    const styles = useStyles();
    return (
        <View style={styles.longArrowIcon}>
            <FontAwesome6 name="arrow-right-long" size={14} color={theme.colors.background} />
        </View>
    );
}
