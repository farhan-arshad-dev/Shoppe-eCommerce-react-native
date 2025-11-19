import { FlatList, Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import PopularItemLayout from "../PopularItem";
import styles from "./styles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { ProductItem } from "@/src/types/product";

export default function MostPopularListSection({
    items
}: {
    items: ProductItem[],
}) {
    const commonStyles = useCommonStyles();
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
                            imageUrl={item.images[0]} />
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={commonStyles.horizontalListGap}
            />
        </View>
    );
}