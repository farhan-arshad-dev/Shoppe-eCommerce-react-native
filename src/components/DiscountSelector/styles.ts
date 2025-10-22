import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    selectedItem: {
        borderRadius: 18,
        borderColor: "#004CFF",
        borderWidth: 2,
        backgroundColor: "#ffffff"
    },
    text: {
        fontSize: 13,
        fontWeight: "bold",
        lineHeight: 17,
        color: "#000000",
    },
    selectedText: {
        fontSize: 16,
        color: "#004CFF",
        fontWeight: "800",
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    triangleDown: {
        position: "absolute",
        top: 0,
        left: "50%",
        marginLeft: -6,
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderStyle: "solid",
        backgroundColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "#004CFF",
    },
});
