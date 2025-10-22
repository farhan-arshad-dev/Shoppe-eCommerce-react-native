import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: 34,
        height: 34,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: "#F8F8F8"
    },
    dot: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#0042E0',
    },
});
