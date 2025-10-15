import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: width * 0.35,
    },
    newItemCard: {
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
    newItemImage: {
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
    price: {
        fontSize: 17,
        fontWeight: "bold",
        lineHeight: 21,
        color: "#202020",
    },
});