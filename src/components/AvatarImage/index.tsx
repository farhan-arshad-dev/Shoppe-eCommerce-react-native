import { Image, ImageSourcePropType, View } from "react-native";
import styles from "./styles";
import DefaultAvatar from "@/assets/images/default-avatar.png";

export default function AvatarImage({
    image,
    cardSize = 60,
    imageSize = 50,
}: {
    image: string,
    cardSize?: number,
    imageSize?: number,
}) {
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
            { width: cardSize, height: cardSize, borderRadius: cardSize / 2 },
        ]}>
            <Image source={getImageSource()} style={[
                styles.avatarImage,
                { width: imageSize, height: imageSize, borderRadius: imageSize / 2 },
            ]} />
        </View>
    );
}
