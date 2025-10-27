import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme => ({
    secondaryButton: {
        width: "100%",
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.metrics.borderRadius.xlarge,
        padding: theme.metrics.spacing.medium,
    },
    secondaryButtonText: {
        ...theme.typography.fontStyle.bodyXXLarge,
        color: theme.colors.primaryButtonText,
        textAlign: "center",
    },
})));
