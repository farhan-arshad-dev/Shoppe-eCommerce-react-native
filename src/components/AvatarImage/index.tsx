import { Image, ImageSourcePropType, StyleProp, View, ViewStyle } from "react-native";
import { useStyle } from "./styles";
import { DefaultAvatar } from "@/src/data/defaults";

export default function AvatarImage({
    image,
    cardSize = 60,
    imageSize = 50,
    containerStyle,
}: {
    image: string,
    cardSize?: number,
    imageSize?: number,
    containerStyle?: StyleProp<ViewStyle>
}) {
    const styles = useStyle();
    const getImageSource = (): ImageSourcePropType => {
        if (typeof image === "string") {
            if (image.startsWith("http")) return { uri: image };
            return DefaultAvatar;
        }
        return image;
    };
    return (
        <View style={[
            styles.avatarCard,
            containerStyle,
            { width: cardSize, height: cardSize, borderRadius: cardSize / 2 },
        ]}>
            <Image source={getImageSource()} style={[
                styles.avatarImage,
                { width: imageSize, height: imageSize, borderRadius: imageSize / 2 },
            ]} />
        </View>
    );
}
