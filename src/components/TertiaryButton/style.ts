import { makeStyles } from "@/src/theme/makeStyles";

export const useStyle = makeStyles((theme) => ({
    tertiaryButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    tertiaryButtonText: {
        ...theme.typography.fontStyle.bodyLarge,
        opacity: 0.9,
        marginHorizontal: theme.metrics.spacing.medium,
        color: theme.colors.primaryText
    },
}));