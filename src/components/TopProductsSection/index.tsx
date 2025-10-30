import { FlatList, Text, View } from "react-native";
import AvatarImage from "../AvatarImage";
import { TopProduct } from "@/src/types/shop-tabs";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useStyles } from "./styles";

export default function TopProductsSection({
    items,
}: {
    items: TopProduct[]
}) {

    const styles = useStyles();
    const commonStyles = useCommonStyles();

    return (
        <View style={styles.topProducts}>
            <View style={commonStyles.listHeader}>
                <Text style={commonStyles.listTitle}>Top Products</Text>
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
                contentContainerStyle={[commonStyles.horizontalListGap, styles.horizontalList]}
            />
        </View>
    );
}
