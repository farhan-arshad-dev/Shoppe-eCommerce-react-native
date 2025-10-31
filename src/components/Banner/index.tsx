import { Image, View } from "react-native";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useStyles } from "./styles";

export default function Banner({ image }: { image: string }) {

    const commonStyles = useCommonStyles();
    const styles = useStyles();

    return (
        <View style={[commonStyles.fillParent, styles.banner]}>
            <Image source={{ uri: image }} style={commonStyles.fillParent} resizeMode="cover" />
        </View>
    )
}
