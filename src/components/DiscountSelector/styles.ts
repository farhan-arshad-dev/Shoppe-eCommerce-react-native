import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
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
        ...theme.typography.fontStyle.titleSmall,
        color: theme.colors.tabText,
    },
    selectedText: {
        ...theme.typography.fontStyle.headlineXSmall,
        color: theme.colors.primary,
        fontFamily: theme.typography.fontFamily.RalewayExtraBold,
        padding: theme.metrics.spacing.tiny,
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
}));
