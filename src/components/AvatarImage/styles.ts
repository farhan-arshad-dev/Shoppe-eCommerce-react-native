import { StyleSheet } from "react-native";

export default StyleSheet.create({
    avatarCard: {
        backgroundColor: "#ffffff",

        justifyContent: 'center',
        alignItems: 'center',

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,   // background must set in the same scope
    },
    avatarImage: {
        width: 50,
        height: 50,
        overflow: "hidden",
        borderRadius: 25,
    },
});
