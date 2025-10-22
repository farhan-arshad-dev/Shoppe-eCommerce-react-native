import { StyleSheet } from "react-native";

export default StyleSheet.create({
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%",
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
        marginVertical: 3,
        padding: 5,

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,   // background must set in the same scope
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    image: {
        width: "48%", // two images per row in each card
        minHeight: "48%",
        aspectRatio: 1,
        borderRadius: 5,
        marginVertical: 2,
    },
    cardTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
    },
    name: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#202020",
        textAlign: "center",
        lineHeight: 21,
    },
    count: {
        fontSize: 12,
        color: "#202020",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: 21,
        backgroundColor: "#DFE9FF",
        borderRadius: 6,
        paddingVertical: 1,
        paddingHorizontal: 8,
    },
});
