import { View, Image, Pressable, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import LiveTag from "../LiveTag";
import { videoUrls } from "@/src/data/shop-tabs-data";
import VideoPlayer from "../VideoPlayer";
import { useState } from "react";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useStyles } from "./styles";

export default function StoriesItemLayout({
    imageUrl,
    isLive = false,
    isActive = false,
    onActive,
}: {
    imageUrl: string,
    isLive?: boolean,
    isActive?: boolean,
    onActive?: () => void,
}) {
    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const [isSaleVideoPlaying, setIsSaleVideoPlaying] = useState(false);

    const showImage = !isActive || !isSaleVideoPlaying
    return (
        <TouchableOpacity
            style={styles.card}
            disabled={isActive}
            onPress={() => {
                onActive?.();
            }}>
            {isActive && (
                <VideoPlayer
                    videoSource={videoUrls.verticalVideo}
                    onPlayStateChange={(isPlaying) => {
                        setIsSaleVideoPlaying(isPlaying)
                    }}
                />
            )}
            {showImage &&
                (<View style={[
                    commonStyles.container,
                    commonStyles.fillParent
                ]}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />

                    <View style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="play"
                            size={theme.metrics.componentSizes.playIcon}
                            color={theme.colors.background} />
                    </View>
                </View>)}
            {isLive && (
                <View style={styles.liveTagContainer}>
                    <LiveTag />
                </View>
            )}
        </TouchableOpacity>
    );
}
