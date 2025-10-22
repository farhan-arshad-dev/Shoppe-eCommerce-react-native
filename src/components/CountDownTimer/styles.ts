import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    iconContainer: {
        marginRight: 4,
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#F3F3F3",
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 7,
        marginHorizontal: 4,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    value: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#202020",
    },
    clockIcon: {
        width: 22,
        height: 22,
        tintColor: "#004CFF",
        resizeMode: "contain",
    }
});