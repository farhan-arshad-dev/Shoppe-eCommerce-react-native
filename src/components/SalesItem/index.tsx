import { Image, Text, View } from "react-native";
import styles from "./styles";


export default function SalesItemLayout({
    itemPosition,
    discount,
    imageUrl
}: {
    itemPosition: number,
    discount: string
    imageUrl: string,
}
) {
    const columnGap = {
        marginLeft: itemPosition % 3 === 0 ? 0 : 4,
        marginRight: (itemPosition + 1) % 3 === 0 ? 0 : 4,
    }
    return (
        <View
            style={[styles.container, columnGap]}>
            <Image source={{ uri: imageUrl }} style={styles.saleItemImage} />
            <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{discount}</Text>
            </View>
        </View>
    );
}