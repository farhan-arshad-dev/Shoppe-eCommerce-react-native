import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AvatarImage from "../AvatarImage";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useStyles } from "./styles";
import { ProductItem } from "@/src/types/product";

export default function TopProductsSection({
    items,
}: {
    items: ProductItem[]
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
                        <TouchableOpacity>
                            <AvatarImage image={item.images[0]} />
                        </TouchableOpacity>
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
