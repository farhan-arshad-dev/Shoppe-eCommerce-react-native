import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    newItemsContainer: {
        marginTop: theme.metrics.spacing.xxLarge,
    },
    horizontalList: {
        gap: theme.metrics.spacing.xSmall,
    },
}));
