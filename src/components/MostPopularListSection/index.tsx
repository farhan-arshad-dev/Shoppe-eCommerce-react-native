import { FlatList, Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import PopularItemLayout from "../PopularItem";
import { PopularItem } from "@/src/types/shop-tabs";
import styles from "./styles";

export default function MostPopularListSection({
    items
}: {
    items: PopularItem[],
}) {
    return (
        <View style={styles.popularContainer}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>Most Popular</Text>
                <SeeAllButton />
            </View>

            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return (
                        <PopularItemLayout
                            key={item.id}
                            likes={item.totalLikes}
                            tagText={item.tag}
                            imageUrl={item.image} />
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