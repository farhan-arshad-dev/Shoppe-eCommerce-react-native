import { makeStyles } from "@/src/theme/makeStyles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const useStyles = makeStyles((theme) => ({
    card: {
        flexDirection: "column",
        width: width * 0.3,
        aspectRatio: 0.6,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: theme.metrics.borderRadius.medium,
        borderWidth: theme.metrics.componentSizes.borderWidth,
        borderColor: theme.colors.border,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    playButtonContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -16 }, { translateY: -16 }], // center align
        width: 30,
        height: 30,
        borderRadius: 24,
        backgroundColor: "#ffffff80",
        alignItems: "center",
        justifyContent: "center",
    },
    liveTagContainer: {
        position: "absolute",
        top: 4,
        start: 4,
    },
}));
