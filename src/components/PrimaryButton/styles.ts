import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    primaryButtonContainer: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.metrics.spacing.medium,
        padding: theme.metrics.spacing.medium,
    },
    primaryButtonText: {
        ...theme.typography.fontStyle.bodyXXLarge,
        color: theme.colors.primaryButtonText,
        textAlign: "center",
    }
}));
