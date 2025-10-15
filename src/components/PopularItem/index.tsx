import { View, Text, Image } from "react-native";
import styles from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PopularItemLayout({
    imageUrl,
    likes,
    tagText,
}: {
    imageUrl: string;
    likes: number;
    tagText?: string; // optional tab text
}) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />

            <View style={styles.footer}>
                <View style={styles.likeContainer}>
                    <Text style={styles.likesText}>{likes}</Text>
                    <Ionicons name="heart" size={12} color="#0042E0" />
                </View>
                {tagText && (
                    <Text style={styles.tagText}>{tagText}</Text>
                )}
            </View>
        </View>
    );
}
