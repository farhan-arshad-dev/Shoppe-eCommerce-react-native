import { makeStyles } from "@/src/theme/makeStyles";

export const useStyle = makeStyles((theme) => ({
    tertiaryButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    tertiaryButtonText: {
        ...theme.typography.fontStyle.bodyLarge,
        marginHorizontal: theme.metrics.spacing.medium,
        color: theme.colors.primaryText
    },
}));
