import { Image, View } from "react-native";
import styles from "./styles";

export default function Banner({ image }: { image: string }) {
    return (
        <View style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
        </View>
    )
}
