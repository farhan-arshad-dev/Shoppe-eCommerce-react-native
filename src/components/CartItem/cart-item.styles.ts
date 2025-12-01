import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 12,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },

    imageContainer: {
        width: 124,
        height: 100,
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 12,
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },

    deleteButton: {
        position: "absolute",
        bottom: 4,
        left: 4,
        backgroundColor: "#FF4444",
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },

    deleteText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    right: {
        width: "60%",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#222",
    },

    row: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 4,
        gap: 12,
    },

    meta: {
        fontSize: 12,
        color: "#666",
    },

    price: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: "bold",
        color: "#111",
    },

    /* QTY SECTION */
    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },

    qtyButton: {
        width: 28,
        height: 28,
        borderRadius: 8,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
    },

    qtyText: {
        fontSize: 18,
        fontWeight: "bold",
    },

    qtyNumber: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: "600",
    },
}));