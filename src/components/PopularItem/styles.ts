import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    card: {
        flexDirection: "column",
        width: width * 0.3,
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 10,
        padding: 5,
        marginBottom: 8,
        backgroundColor: "#ffffff",

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,   // background must set in the same scope
    },
    image: {
        width: "100%",
        aspectRatio: 0.9,
        borderRadius: 5,
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 6,
        paddingHorizontal: 4,
        alignItems: "center",
        justifyContent: "space-between"
    },
    likesText: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 19,
    },
    likeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    tagText: {
        color: "#202020",
        fontWeight: "medium",
        fontSize: 13,
    },
});
