import { FlatList, Text, View } from "react-native";
import AvatarImage from "../AvatarImage";
import { TopProduct } from "@/src/types/shop-tabs";
import styles from "./styles";

export default function TopProductsSection({
    items,
}: {
    items: TopProduct[]
}) {
    return (
        <View style={styles.topProducts}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>Top Products</Text>
            </View>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return (
                        <AvatarImage image={item.image} />
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
            />
        </View>
    );
}
