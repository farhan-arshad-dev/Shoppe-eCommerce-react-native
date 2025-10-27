import { makeStyles } from "../theme/makeStyles";

export const useCommonStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.metrics.spacing.xLarge,
    },
    centerContent: {
        justifyContent: "center",
        alignItems: "center",
    },
    fullWidth: {
        width: "100%",
    },
    fullFlex: {
        flex: 1,
        width: "100%",
    },
    fillParent: {
        width: "100%",
        height: "100%",
    },
    centerFull: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundContainer: {
        position: "absolute",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    authInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.colors.surface,
        paddingHorizontal: theme.metrics.spacing.large,
        paddingVertical: theme.metrics.spacing.medium,
        borderRadius: theme.metrics.borderRadius.xxHuge,
        marginBottom: theme.metrics.spacing.xSmall,
    },
}));
