import { Image, Text, View } from "react-native";
import styles from "./styles";


export default function JustForYouItem(
    { index, title, price, imageUrl }: {
        index: number
        title: string,
        price: string,
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
            <Text style={styles.price}>{price}</Text>
        </View>
    );
}