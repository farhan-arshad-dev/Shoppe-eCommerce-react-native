import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { NewItem } from "@/src/types/shop-tabs";
import { useCommonStyles } from "@/src/styles/commonStyles";
import DiscountGrideList from "../DiscountGrideList";
import { useStyles } from "./styles";

export default function JustForYouSection({
    items,
}: {
    items: NewItem[];
}) {
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    return (
        <View style={styles.forYouContainer}>
            <View style={[styles.listHeader, { justifyContent: "flex-start" }]}>
                <Text style={styles.listTitle}>Just For You</Text>
                <Ionicons name="star" size={14} color="#004CFF" />
            </View>
            <DiscountGrideList items={items} />
        </View>
    );
}
