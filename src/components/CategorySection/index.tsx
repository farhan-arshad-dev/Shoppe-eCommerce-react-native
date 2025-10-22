import { Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import { Category } from "@/src/types/shop-tabs";
import styles from "./styles";
import CategoryGridList from "../CategoryGridList";

export default function CategorySection({
    categories,
}: {
    categories: Category[]
}) {
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>Categories</Text>
                <SeeAllButton />
            </View>

            <CategoryGridList categories={categories} />
        </View>
    );
}
