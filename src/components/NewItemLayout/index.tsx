import { Image, Text, View } from "react-native";
import styles from "./styles";


export default function NewItemLayout(
    { title, price, imageUrl }: {
        title: string,
        price: string,
        imageUrl: string,
    }
) {
    return (
        <View style={styles.container}>
            <View style={styles.newItemCard}>
                <Image source={{ uri: imageUrl }} style={styles.newItemImage} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
}