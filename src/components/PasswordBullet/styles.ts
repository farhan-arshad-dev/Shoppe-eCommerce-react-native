import { StyleSheet } from "react-native";


export default StyleSheet.create({
    passwordBulletContainer: {
        height: 18,
        width: "100%",
    },
    hiddenInput: {
        position: "absolute",
        opacity: 0,
    },
    bulletRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
    bullet: {
        width: 17,
        height: 17,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    filledBullet: {
        backgroundColor: "#004CFF",
        borderColor: "#004CFF",
    },
    emptyBullet: {
        borderColor: "#E5EBFC",
        backgroundColor: "#E5EBFC",
    },
    wrongPasswordBullet: {
        backgroundColor: "#EC4E4E",
        borderColor: "#EC4E4E",
    },
    wrongPasswordEmptyBullet: {
        backgroundColor: "#F8CECE",
        borderColor: "#F8CECE",
    },
});
