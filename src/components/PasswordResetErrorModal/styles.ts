import { StyleSheet } from "react-native";

export default StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "#000000cc",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 19,
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 20,
    },
    iconCard: {
        width: 80,
        height: 80,
        borderRadius: 40, // Half of the width/height
        justifyContent: 'center',
        alignItems: 'center',

        position: "absolute",
        top: -40,
        alignSelf: "center",
        backgroundColor: "#ffffff",

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,
    },
    outerCircle: {
        width: 50,
        height: 50,
        backgroundColor: "#FFEBEB",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        width: 24,
        height: 24,
        backgroundColor: "#F1AEAE",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#ffffff",
        borderWidth: 2,
    },
    content: {
        width: "100%",
        alignItems: "center",
    },
    message: {
        textAlign: "center",
        color: "#202020",
        fontSize: 18,
        fontWeight: "medium",
        lineHeight: 28,
        marginVertical: 20,
        paddingHorizontal: 8,
    },
    button: {
        width: "55%",
        backgroundColor: "#202020",
        borderRadius: 16,
    },
    buttonText: {
        color: "#F3F3F3",
        fontSize: 22,
        fontWeight: "light",
        margin: 16,
        textAlign: "center"
    },
});
