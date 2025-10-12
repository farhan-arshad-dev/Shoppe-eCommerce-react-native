import { StyleSheet } from "react-native";

export default StyleSheet.create({
    verificationOptions: {
        width: "100%",
        alignItems: "center"
    },
    smsButton: {
        flexDirection: "row",
        justifyContent: "center",
        width: "55%",
        backgroundColor: "#E5EBFC",
        borderRadius: 16,
    },
    smsButtonText: {
        flex: 1,
        color: "#004CFF",
        textAlign: "center",
        lineHeight: 19,
        margin: 10,
        fontWeight: "bold",
    },
    emailButton: {
        width: "55%",
        backgroundColor: "#FFEBEB",
        borderRadius: 16,
        marginTop: 10,
    },
    emailButtonText: {
        color: "#000000",
        textAlign: "center",
        lineHeight: 19,
        margin: 10,
        fontWeight: "medium",
    },
    bullet: {
        position: "absolute",
        width: 22,
        height: 22,
        borderRadius: 11,
        borderColor: "#ffffff",
        borderWidth: 2,
        right: 6,
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    smsBulletActive: {
        backgroundColor: "#004CFF",
    },
    smsBulletInActive: {
        backgroundColor: "#E5EBFC",
    },
    emailBulletActive: {
        backgroundColor: "#EC4E4E",
    },
    emailBulletInActive: {
        backgroundColor: "#F8CECE",
    },
});
