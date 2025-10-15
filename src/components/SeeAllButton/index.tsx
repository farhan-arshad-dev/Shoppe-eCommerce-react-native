import { TouchableOpacity, Text } from "react-native";
import LoginArrowIcon from "../LongArrowIcon";
import styles from "./styles";

export default function SeeAllButton() {
    return (
        <TouchableOpacity style={styles.seeAllContainer}>
            <Text style={styles.seeAllText}>See All</Text>
            <LoginArrowIcon />
        </TouchableOpacity>
    );
}
