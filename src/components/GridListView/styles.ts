import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.metrics.spacing.xSmall,
    },
    itemWrapper: {
        flex: 1,
    },
    fullWidthWrapper: {
        width: '100%',
        marginBottom: theme.metrics.spacing.xSmall,
    },
}));
