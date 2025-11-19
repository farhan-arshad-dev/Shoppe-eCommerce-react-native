import { Text, View } from "react-native";
import SeeAllButton from "../SeeAllButton";
import CategoryGridList from "../CategoryGridList";
import { useStyles } from "./styles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { ProductItem } from "@/src/types/product";

export default function CategorySection({
    categories,
}: {
    categories: ProductItem[]
}) {

    const styles = useStyles();
    const commonStyles = useCommonStyles();

    return (
        <View style={[commonStyles.fullWidth, styles.container]}>
            <View style={commonStyles.listHeader}>
                <Text style={commonStyles.listTitle}>Categories</Text>
                <SeeAllButton />
            </View>

            <CategoryGridList categories={categories} />
        </View>
    );
}
