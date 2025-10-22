import { View, Image } from "react-native";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import LiveTag from "../LiveTag";

export default function StoriesItemLayout({
    imageUrl,
    isLive = false
}: {
    imageUrl: string;
    isLive?: boolean;
}) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />

            <View style={styles.playButtonContainer}>
                <FontAwesome5 name="play" size={14} color="#ffffff" />
            </View>
            {isLive && (
                <View style={styles.liveTagContainer}>
                    <LiveTag />
                </View>
            )}
        </View>
    );
}
