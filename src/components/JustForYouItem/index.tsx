import { Image, Text, View } from "react-native";
import styles from "./styles";


export default function JustForYouItem(
    { index, title, price, discountedPrice, imageUrl }: {
        index: number
        title: string,
        price: string,
        discountedPrice?: string,
        imageUrl: string,
    }
) {
    const columnGap =
    {
        // Add horizontal gap except on the rightmost item
        marginRight: index % 2 === 0 ? 8 : 0,
    };
    return (
        <View style={[styles.container, columnGap]}>
            <View style={styles.justForYouItemCard}>
                <Image source={{ uri: imageUrl }} style={styles.justForYouItemImage} />
            </View>
            <Text style={styles.title}>{title}</Text>
            {discountedPrice ? (
                <View style={styles.priceContainer}>
                    <Text style={styles.discountedPrice}>{discountedPrice}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            ) : (
                <Text style={styles.discountedPrice}>{price}</Text>
            )}
        </View>
    );
}