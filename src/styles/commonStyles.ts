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
    primaryButtonContainer: {
        backgroundColor: "#004CFF",
        borderRadius: theme.metrics.spacing.medium,
        padding: theme.metrics.spacing.medium,
    },
    primaryButtonText: {
        ...theme.typography.fontStyle.headlineMedium,
        color: theme.colors.primaryButtonText,
        textAlign: "center",
    },
    tertiaryButtonText: {
        ...theme.typography.fontStyle.bodyLarge,
        opacity: 0.9,

    }
}));
