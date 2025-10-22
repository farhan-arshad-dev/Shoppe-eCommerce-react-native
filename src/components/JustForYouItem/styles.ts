import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        width: "48%",
    },
    justForYouItemCard: {
        backgroundColor: "#ffffff",

        borderRadius: 9, // Half of the width/height
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 6,

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,   // background must set in the same scope
    },
    justForYouItemImage: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 5, // Half of the width/height
    },
    title: {
        fontSize: 12,
        fontWeight: "regular",
        lineHeight: 16,
        color: "#000000",
        marginBottom: 4,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    discountedPrice: {
        fontSize: 17,
        fontWeight: "bold",
        lineHeight: 21,
        color: "#202020",
    },
    price: {
        marginStart: 2,
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 18,
        color: "#F1AEAE",
        textDecorationLine: "line-through",
    },
});