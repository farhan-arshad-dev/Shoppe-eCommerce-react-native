import { FlatList, Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import NewItemLayout from "../NewItemLayout";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useStyles } from "./styles";
import { ProductItem } from "@/src/types/product";

export default function NewItemsListSection({
    items,
    onItemPress,
}: {
    items: ProductItem[];
    onItemPress: (productId: number) => void,
}) {

    const styles = useStyles();
    const commonStyles = useCommonStyles();

    return (
        <View style={styles.newItemsContainer}>
            <View style={commonStyles.listHeader}>
                <Text style={commonStyles.listTitle}>New Items</Text>
                <SeeAllButton />
            </View>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return (
                        <NewItemLayout
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.images[0]}
                            onPress={() => onItemPress(item.id)}
                        />
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