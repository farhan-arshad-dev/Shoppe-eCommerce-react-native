import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "31.5%",
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
    saleItemImage: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 5,
    },
    discountBadge: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#F81140",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
    },
    discountText: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold",
    },
});