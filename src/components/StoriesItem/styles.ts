import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    card: {
        flexDirection: "column",
        width: width * 0.3,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 0.6,
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
});
