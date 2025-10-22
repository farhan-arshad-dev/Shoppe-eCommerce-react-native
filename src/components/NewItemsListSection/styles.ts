import { StyleSheet } from "react-native";

export default StyleSheet.create({
    newItemsContainer: {
        marginTop: 32,
    },
    listHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        justifyContent: "space-between"
    },
    listTitle: {
        fontSize: 21,
        fontWeight: "bold",
        lineHeight: 30,
        color: "#202020",
        marginRight: 8,
    },
    horizontalList: {
        gap: 8,
    },
})