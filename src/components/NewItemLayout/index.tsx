import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";


export default function NewItemLayout(
    { title, price, imageUrl, onPress }: {
        title: string,
        price: string,
        imageUrl: string,
        onPress: () => void,
    }
) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.newItemCard}>
                <Image source={{ uri: imageUrl }} style={styles.newItemImage} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
    );
}