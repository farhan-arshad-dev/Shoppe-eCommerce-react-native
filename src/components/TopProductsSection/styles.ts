import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    topProducts: {
        marginVertical: theme.metrics.spacing.xSmall,
    },
    horizontalList: {
        gap: theme.metrics.spacing.xSmall,
        marginVertical: theme.metrics.spacing.xSmall,
    },
}))
