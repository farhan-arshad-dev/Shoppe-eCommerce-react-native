import { FlatList, Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import NewItemLayout from "../NewItemLayout";
import { NewItem } from "@/src/types/shop-tabs";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useStyles } from "./styles";

export default function NewItemsListSection({
    items
}: {
    items: NewItem[];
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