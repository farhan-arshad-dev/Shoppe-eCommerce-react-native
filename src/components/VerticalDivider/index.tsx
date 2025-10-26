import { View } from "react-native";
import { useStyles } from "./styles";

export default function VerticalDivider() {
    const styles = useStyles();
    return (
        <View style={styles.divider} />
    )
}
