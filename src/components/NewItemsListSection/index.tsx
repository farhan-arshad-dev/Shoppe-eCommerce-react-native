import { FlatList, Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import NewItemLayout from "../NewItemLayout";
import styles from "./styles";
import { NewItem } from "@/src/types/shop-tabs";

export default function NewItemsListSection({
    items
}: {
    items: NewItem[];
}) {
    return (
        <View style={styles.newItemsContainer}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>New Items</Text>
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