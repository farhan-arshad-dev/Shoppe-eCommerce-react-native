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
        width: "100%",
        flex: 1,
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
